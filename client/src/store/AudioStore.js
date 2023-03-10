import {makeAutoObservable} from "mobx";

export default class AudioStore {
    constructor() {
        this._name = []
        this._selectedName = ""
        this._categories = []
        this._audios = []
        this._selectedCategory = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        this._price = 1
        makeAutoObservable(this)
    }

    setName(name) {
        this._name = name
    }
    setCategories(categories) {
        this._categories = categories
    }
    setAudios(audios) {
        this._audios = audios
    }
    setPrice(price){
        this._price = price
    }
    setSelectedCategory(category) {
        this.setPage(1)
        this._selectedCategory = category
    }
    setSelectedName(name) {
        this.setPage(1)
        this._selectedName = name
    }
    setSelectedPrice(price) {
        this.setPage(1)
        this._selectedPrice = price
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    get name() {
        return this._name
    }
    get categories() {
        return this._categories
    }
    get audios() {
        return this._audios
    }
    get price() {
        return this._price
    }
    get selectedCategory() {
        return this._selectedCategory
    }
    get selectedName() {
        return this._selectedName
    }
    get selectedPrice() {
        return this._selectedPrice
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}
