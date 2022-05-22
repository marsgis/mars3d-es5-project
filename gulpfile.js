/* eslint-disable no-undef */
//当前代码来源：https://github.com/muyao1987/web-dist

//在gulpfile中先载入gulp包，因为这个包提供了一些API
const gulp = require("gulp");
const babel = require("gulp-babel");
const plumber = require("gulp-plumber");
const babelCore = require("@babel/core");
const utf8Convert = require("gulp-utf8-convert");
const uglify = require("gulp-uglify");
const header = require("gulp-header");
const htmlmin = require("gulp-htmlmin");
const cheerio = require("gulp-cheerio");
const cssmin = require("gulp-clean-css");
const obfuscator = require("javascript-obfuscator");

const through2 = require("through2");
const Vinyl = require("vinyl");
const JavaScriptObfuscator = require("javascript-obfuscator");
const PluginError = require("plugin-error");
const applySourceMap = require("vinyl-sourcemaps-apply");

const fs = require("fs");
const path = require("path");

//////////////////////////以下参数可以根据实际情况调整/////////////////////
const copyright = "版权所有 火星科技 http://marsgis.cn";

//这个时间后修改的文件不处理（增量更新时使用）
var lastTime; //   = new Date("2022-08-01 08:00:00")

//排除不拷贝的文件类型后缀
const noCopyFileType = [".psd", ".doc", ".docx", ".txt", ".md", ".zip", ".rar"];

//定义不做压缩混淆直接拷贝的目录
const noPipePathDef = ["lib"];

//排除不拷贝的目录
const noCopyPathDef = [
  ".svn",
  ".git",
  "dist",
  "node_modules",
  "CesiumUnminified",
  ".eslintrc",
  ".editorconfig",
  ".eslintignore",
  ".prettierrc",
  ".vscode",
  "LICENSE",
  "gulpfile.js",
  "package.json",
  "package-lock.json",
  "-src.",
];

////////////////////自定义设置////////////////////

//需要压缩混淆的根目录
var srcPath = "./";

//生成到的目标目录
var distPath = "dist";

var noPipePath = [];
var noCopyPath = [];

//js高级混淆的参数,更多参数参考： https://github.com/javascript-obfuscator/javascript-obfuscator
var optsObfuscator = {
  compact: true, //压缩代码

  controlFlowFlattening: true, //是否启用控制流扁平化(降低1.5倍的运行速度)
  controlFlowFlatteningThreshold: 0.7, //应用概率0-1;在较大的代码库中，建议降低此值，因为大量的控制流转换可能会增加代码的大小并降低代码的速度。

  deadCodeInjection: true, //随机的死代码块(增加了混淆代码的大小)
  deadCodeInjectionThreshold: 0.4, //死代码块的影响概率

  debugProtection: false, //是否禁止使用 F12开发者工具的控制台选项卡，可以用来在线代码的禁止别人调试
  debugProtectionInterval: false, //如果选中，则会在“控制台”选项卡上使用间隔强制调试模式，从而更难使用“开发人员工具”的其他功能。
  disableConsoleOutput: false, //是否禁止使用的console.log，console.info，console.error和console.warn。这使得调试器的使用更加困难。
  domainLock: [], //锁定混淆的源代码，使其仅在特定域和/或子域上运行。这使得某人只需复制并粘贴您的源代码并在其他地方运行就变得非常困难。

  identifierNamesGenerator: "hexadecimal", //设置标识符名称生成器。 hexadecimal(十六进制) mangled(短标识符)
  selfDefending: false, //【如果报错，改为false】使输出代码可抵抗格式设置和变量重命名。如果尝试在混淆后的代码上使用JavaScript美化器，则该代码将无法再使用，从而使其难以理解和修改。

  stringArray: true, //删除字符串文字并将它们放在一个特殊的数组中
  stringArrayEncoding: "base64", //'rc4'  > 'base64'
  stringArrayThreshold: 0.75,

  transformObjectKeys: false, //启用对象键的转换
};

////////////////////压缩混淆////////////////////

const fileList = [];
gulp.task("build", (done) => {
  // console.log('--------代码编译开始--------');

  console.log("开始处理目录：" + srcPath);
  console.log("生成至目录：" + distPath);

  travel(srcPath);

  fileList.forEach((t) => {
    var srcFile = t.pathname;
    const outFilePath = distPath;
    // console.log('读取：' + srcFile + '\n输出：' + outFilePath + '\n');

    let stat = fs.statSync(srcFile);
    if (lastTime != null && stat.mtime < lastTime) {
      return;
    }

    let bannerData = { date: stat.mtime.format("yyyy-M-d HH:mm:ss") };
    let banner = "/* <%= date %> | " + copyright + " */\n";
    let bannerHtml = "<!-- <%= date %> | " + copyright + " -->\n";

    // t.fileType='' //不加密
    switch (t.fileType) {
      case ".js":
        if (stat.size > 102400) {
          optsObfuscator.controlFlowFlattening = false; //大文件不建议为true，造成文件更大
        } else {
          optsObfuscator.controlFlowFlattening = true;
        }
        gulp
          .src(srcFile, {
            base: srcPath,
          })
          .pipe(
            plumber({
              errorHandler: function (err) {
                throwOnlyCopy(srcPath, srcFile, outFilePath, err);
              },
            })
          )
          .pipe(
            utf8Convert({
              encNotMatchHandle: function (file) {
                throwOnlyCopy(srcPath, srcFile, outFilePath, " 编码可能不是utf-8，避免乱码请检查！");
              },
            })
          )
          .pipe(
            babel({
              presets: ["@babel/preset-env"],
              sourceType: "script",
              compact: false,
            })
          )
          .pipe(
            uglify().on("error", function () {
              this.emit("end");
              throwOnlyCopy(srcPath, srcFile, outFilePath, err);
            })
          )
          .pipe(optsObfuscator.compact ? obfuscatorGulp(optsObfuscator) : header(banner, bannerData))
          .pipe(header(banner, bannerData))
          .pipe(gulp.dest(outFilePath));
        break;
      case ".html":
        gulp
          .src(srcFile, {
            base: srcPath,
          })
          .pipe(
            plumber({
              errorHandler: function (err) {
                throwOnlyCopy(srcPath, srcFile, outFilePath, err);
              },
            })
          )
          .pipe(
            utf8Convert({
              encNotMatchHandle: function (file) {
                throwOnlyCopy(srcPath, srcFile, outFilePath, " 编码可能不是utf-8，避免乱码请检查！");
              },
            })
          )
          .pipe(
            cheerio({
              run: function ($, file) {
                $("script").each(function () {
                  // html内联js编译
                  const script = $(this);
                  try {
                    if (!script.attr("src")) {
                      const scriptHtml = script.html();
                      const result = babelCore.transformSync(scriptHtml, {
                        presets: ["@babel/preset-env"],
                        sourceType: "script",
                        compact: false,
                      });

                      if (optsObfuscator.compact) {
                        //高级加密
                        optsObfuscator.controlFlowFlattening = true;
                        var obfuscationResult = obfuscator.obfuscate(result.code, optsObfuscator);
                        script.text(obfuscationResult.getObfuscatedCode());
                      } else {
                        //普通加密
                        script.text(result.code);
                      }
                    }
                  } catch (err) {
                    console.log("转换html出错了", err);
                    throwOnlyCopy(srcPath, srcFile, outFilePath, "html内联js编译错误！");
                  }
                });
              },
            })
          )
          .pipe(
            htmlmin({
              collapseWhitespace: true, //清除空格，压缩html，作用比较大，引起的改变压缩量也特别大
              collapseBooleanAttributes: true, //省略布尔属性的值，比如：<input checked="checked"/>,那么设置这个属性后，就会变成 <input checked/>
              removeComments: true, //清除html中注释
              removeEmptyAttributes: true, //清除所有的空属性
              removeScriptTypeAttributes: true, //清除所有script标签中的type="text/javascript"属性
              removeStyleLinkTypeAttributes: true, //清楚所有Link标签上的type属性
              minifyJS: true, //压缩html中的javascript代码
              minifyCSS: true, //压缩html中的css代码
            })
          )
          .pipe(header(bannerHtml, bannerData))
          .pipe(gulp.dest(outFilePath));
        break;
      case ".css":
        gulp
          .src(srcFile, {
            base: srcPath,
          })
          .pipe(
            plumber({
              errorHandler: function (err) {
                throwOnlyCopy(srcPath, srcFile, outFilePath, err);
              },
            })
          )
          .pipe(
            utf8Convert({
              encNotMatchHandle: function (file) {
                throwOnlyCopy(srcPath, srcFile, outFilePath, " 编码可能不是utf-8，避免乱码请检查！");
              },
            })
          )
          .pipe(
            cssmin({
              advanced: false, //类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
              compatibility: "ie8", //保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
              keepSpecialComments: "*", //保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
            })
          )
          .pipe(header(banner, bannerData))
          .pipe(gulp.dest(outFilePath));
        break;
      default:
        gulp
          .src(srcFile, {
            base: srcPath,
          })
          .pipe(gulp.dest(outFilePath));
        break;
    }
  });
  done();

  // console.log('--------代码编译完成--------');
});

//遍历目录获取文件列表
function travel(dir) {
  fs.readdirSync(dir).forEach(function (file) {
    let pathname = path.join(dir, file);
    if (fs.statSync(pathname).isDirectory()) {
      //排除不拷贝的目录，文件不会生成到目标目录中
      if (noCopyPathDef.some((t) => pathname.indexOf(t) !== -1)) {
        return;
      }
      if (noCopyPath.some((t) => pathname.indexOf(t) !== -1)) {
        return;
      }

      travel(pathname);
    } else {
      let fileType = path.parse(pathname).ext;
      // console.log(pathname);

      //排除不拷贝的文件，文件不会生成到目标目录中
      if (noCopyPathDef.some((t) => pathname.indexOf(t) !== -1)) {
        return;
      }
      if (noCopyPath.some((t) => pathname.indexOf(t) !== -1)) {
        return;
      }
      if (noCopyFileType.indexOf(fileType) !== -1) {
        return;
      }

      //不做压缩处理,直接原样拷贝过去
      if (
        noPipePath.some((t) => pathname.indexOf("\\Cesium\\") !== -1) || //不对Cesium目录压缩
        noPipePathDef.some((t) => pathname.indexOf(t) !== -1) ||
        noPipePath.some((t) => pathname.indexOf(t) !== -1)
      ) {
        fileType = "";
      }

      fileList.push({
        pathname,
        fileType,
      });
    }
  });
}

// 抛出错误信息，直接copy文件
function throwOnlyCopy(srcPath, pathname, outFilePath, message) {
  console.log(`[转换出错了] ${pathname}`, message);
  if (pathname && outFilePath) {
    gulp
      .src(pathname, {
        base: srcPath,
      })
      .pipe(gulp.dest(outFilePath));
  }
}

function obfuscatorGulp(options = {}) {
  return through2.obj(function (file, enc, cb) {
    if (file.isNull()) {
      return cb(null, file);
    }
    if (!file.isBuffer()) {
      throw new PluginError("gulp-javascript-obfuscator", "Only Buffers are supported!");
    }
    if (file.sourceMap) {
      options.sourceMap = true;
      options.inputFileName = file.relative;
      options.sourceMapMode = "separate";
    }

    try {
      const obfuscationResult = JavaScriptObfuscator.obfuscate(String(file.contents), options);
      file.contents = Buffer.from(obfuscationResult.getObfuscatedCode());
      if (options.sourceMap && options.sourceMapMode !== "inline") {
        if (file.sourceMap) {
          const sourceMap = JSON.parse(obfuscationResult.getSourceMap());
          sourceMap.file = file.sourceMap.file;
          applySourceMap(file, sourceMap);
        } else {
          this.push(
            new Vinyl({
              cwd: file.cwd,
              base: file.base,
              path: file.path + ".map",
              contents: Buffer.from(obfuscationResult.getSourceMap()),
            })
          );
        }
      }
      return cb(null, file);
    } catch (err) {
      throw new PluginError("gulp-javascript-obfuscator", err);
    }
  });
}

// eslint-disable-next-line no-extend-native
Date.prototype.format = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours() % 12 == 0 ? 12 : this.getHours() % 12, //小时
    "H+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    S: this.getMilliseconds(), //毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }
  }
  return fmt;
};
