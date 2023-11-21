import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import path, { join } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'
import moment from 'moment-timezone' 
import { platform } from 'process'
global.__filename = function filename(pathURL = import.meta.url, rmPrefix = platform !== 'win32') { return rmPrefix ? /file:\/\/\//.test(pathURL) ? fileURLToPath(pathURL) : pathURL : pathToFileURL(pathURL).toString() }; global.__dirname = function dirname(pathURL) { return path.dirname(global.__filename(pathURL, true)) }; global.__require = function require(dir = import.meta.url) { return createRequire(dir) }
const __dirname = global.__dirname(import.meta.url)

global.owner = [['51930454874', 'Creador', true], ['50360082744', 'Colaborador', true], ['5491162522169'], ['5216566596788'], ['59163552945'], ['56986469687'], ['51923844756'], ['56986469687'], ['56986469687'], ['56986469687']]

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '' //Ejemplo: +59309090909
global.confirmCode = ''

global.animxscans = ['400359205']
global.suittag = ['994400359205']
global.mods = []
global.prems = []

global.packname = '𝐿𝑢𝑐𝑦 🩸'
global.author = ''
global.wm = '© 𝐿𝑢𝑐𝑦 🩸'
global.wm2 = '𝐿𝑢𝑐𝑦 🩸 𝗕𝗈𝗍'
global.azami = '𝐿𝑢𝑐𝑦 🩸'
global.cb = '𝐿𝑢𝑐𝑦 🩸'

global.vs = '1.0.2'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = '5217294888993'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
