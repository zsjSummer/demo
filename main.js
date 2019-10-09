const { app, BrowserWindow, dialog, globalShortcut } = require('electron')
// 保持对window对象的全局引用，如果不这么做的话，当JavaScript对象被
// 垃圾回收的时候，window对象将会自动的关闭
let win

function createWindow() {
  // 创建浏览器窗口。
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // 加载index.html文件
  win.loadFile('index.html')

  // 打开开发者工具
  win.webContents.openDevTools()

  // 当 window 被关闭，这个事件会被触发。
  win.on('closed', () => {
    // 取消引用 window 对象，如果你的应用支持多窗口的话，
    // 通常会把多个 window 对象存放在一个数组里面，
    // 与此同时，你应该删除相应的元素。
    win = null
  })
}

// Electron 会在初始化后并准备
// 创建浏览器窗口时，调用这个函数。
// 部分 API 在 ready 事件触发后才能使用。
// app.on('ready', createWindow)
app.on('ready', () => {
  // createWindow();
  // 搜索框框
  var searchWin;
  // 注册全局快捷键---打开搜索框框
  const openSearch = globalShortcut.register('CommandOrControl+X', () => {
    if (searchWin == null) {
      searchWin = new BrowserWindow({
        width: 600,
        height: 500,
        webPreferences: {
          nodeIntegration: true
        },
        frame: false,
        resizable: true,
        opacity: 1.0, // 窗口透明
        transparent: true,
        backgroundColor: '#00FFFFFF'
      })
      searchWin.webContents.openDevTools()
      searchWin.loadFile("./page/search/search.html");
      searchWin.on('closed', () => {
        // 取消引用 window 对象，如果你的应用支持多窗口的话，
        // 通常会把多个 window 对象存放在一个数组里面，
        // 与此同时，你应该删除相应的元素。
        searchWin = null
      })
    } else {
      searchWin.show();
      console.log("already created one window!");
    }
    //注册全局快捷键---关闭搜索框框
    const closeSearch = globalShortcut.register('CommandOrControl+Z', () => {
      if (searchWin != null) {
        searchWin.close();
      }
    })
  })
})

app.on('will-quit', () => {
  // 注销快捷键
  globalShortcut.unregister('CommandOrControl+X')
  globalShortcut.unregister('CommandOrControl+Z')
  // 注销所有快捷键
  globalShortcut.unregisterAll()
})

// 当全部窗口关闭时退出。
app.on('window-all-closed', () => {
  // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
  // 否则绝大部分应用及其菜单栏会保持激活。
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // 在macOS上，当单击dock图标并且没有其他窗口打开时，
  // 通常在应用程序中重新创建一个窗口。
  if (win === null) {
    createWindow()
  }
})

// 在这个文件中，你可以续写应用剩下主进程代码。
// 也可以拆分成几个文件，然后用 require 导入。