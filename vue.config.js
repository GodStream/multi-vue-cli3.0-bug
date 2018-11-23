const path = require('path')
const glob = require('glob')

// function resolve (dir) {
//   return path.join(__dirname, dir)
// }

function getEntry () {
  let pages = {}
  let rewrites = []
  // console.log(glob.sync('src/pages/**/main.js'))
  glob.sync('src/pages/**/main.js').forEach(entry => {
    const tempArr = path.dirname(entry).split('/')
    // let tempArrLength = tempArr.length
    let pathName = ''
    let filename = ''
    pathName = getPathName(tempArr, pathName, tempArr.length)
    filename = getFilename(tempArr, filename, tempArr.length)
    // console.log(filename)
    const htmlPath = path.dirname(entry) + '/index.html'
    pages[pathName] = {
      entry,
      filename,
      template: htmlPath,
      title: '测试'
    }
    rewrites.push({ from: new RegExp('^/' + pathName + '$'), to: `/${pathName}.html` })
  })
  // console.log(rewrites)
  return { pages, rewrites }
}

function getPathName (tempArr, pathName, length) {
  let name = pathName
  if (length >= 3) {
    if (length > 3) {
      if (tempArr[length - 1] !== 'index') {
        name = name !== '' ? tempArr[length - 1] + '/' + name : tempArr[length - 1]
      }
    } else {
      name = name !== '' ? tempArr[length - 1] + '/' + name : tempArr[length - 1]
    }
    length = length - 1
    return getPathName(tempArr, name, length)
  } else {
    return name
  }
}

function getFilename (tempArr, filename, length) {
  let name = filename
  if (length >= 3) {
    name = name !== '' ? tempArr[length - 1] + '/' + name : tempArr[length - 1]
    length = length - 1
    return getFilename(tempArr, name, length)
  } else {
    return name + '.html'
  }
}

const entryConfig = getEntry()

module.exports = {
  productionSourceMap: false,
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': []
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: false
    }
  },
  pages: entryConfig.pages,
  devServer: {
    historyApiFallback: {
      rewrites: entryConfig.rewrites
    }
  }
}
