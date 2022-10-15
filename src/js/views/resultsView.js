// import View from "./View.js"
import View from './view.js';
import previewView from './previewView.js';
import icons from '../../img/icons.svg'

// import View from './view.js';

class ResultsView extends View {
    _parentElement = document.querySelector('.results');
    _errorMEssage = 'no resipes found for your query! Please try again;';
    _message = '';


    _generateMarkup() {

        return this._data.map(result => previewView.render(result, false)).join('')

    }
}

export default new ResultsView();