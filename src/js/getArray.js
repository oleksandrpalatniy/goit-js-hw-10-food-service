import data from '../menu.json'
import template from '../templates/listByArray.hbs'
import refs from './refs.js'

const { photoList } = refs

let result = template(data)

photoList.insertAdjacentHTML('beforeend', result)