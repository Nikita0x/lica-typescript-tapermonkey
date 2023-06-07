// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://app.licacrm.co/callcenter/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=example.com
// @grant        none
// ==/UserScript==
(function () {
    setTimeout(() => {
        

    'use strict';
    
    // #region css goes here
    const styleElement = document.createElement('style');
    styleElement.type = 'text/css';
    document.head.appendChild(styleElement);
    styleElement.textContent = `
    :root {
        --btnMain: #f0f0f0;
        --btnHover: #d7d7d7;
        --btnActive: #cacaca;
        --btnEditHover: #b0b0b0;
        --btnEditActive: #979797;
        --categoriesColors: rgb(64, 67, 144);
        --templatesColors: rgb(39 96 87);
      }
      
      .sidebar {
        min-width: 365px;
      }
      
      /* */
      .lica-container {
        position: relative;
        top: 5%;
        width: 355px;
        transform: translateX(-43.8px);
      }
      
      .container {
        position: relative;
        top: 5%;
        height: 720px;
        width: 355px;
        border-radius: 10px;
        border: 1px solid black;
        background-color: yellow;
      }
      
      /*=========================================HEADER====================================== */
      .container__header {
        position: absolute;
        height: 158px;
        width: 100%;
        top: 0px;
        left: 0px;
        border-radius: 10px 10px 0px 0px;
        background-color: rgb(45, 45, 45);
        color: rgb(242, 242, 242);
        border: 1px solid rgb(108, 117, 125);
      }
      
      .container__header-title {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 30px;
        font-weight: 100;
      }
      
      .container__header-buttons {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
      .container__header-buttons-new {
        display: flex;
        width: 50%;
        height: 40px;
        font-size: 15px;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
      
      .container__header-buttons-spam {
        display: flex;
        width: 50%;
        height: 40px;
        font-size: 15px;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
      
      .container__header-input {
        position: absolute;
        top: 58%;
        left: 12%;
        font-size: 20px;
        padding: 10px;
      }
      
      /*=========================================Body====================================== */
      .container__body {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(auto-fill, 70px);
        grid-column-gap: 2px;
        row-gap: 2px;
        position: absolute;
        top: 22%;
        left: 0px;
        height: 500px;
        overflow-y: scroll;
        width: 100%;
        background-color: rgb(45, 45, 45);
        border: 1px solid rgb(108, 117, 125);
        padding-top: 2px;
        padding-bottom: 20px;
        padding-left: 2px;
      }
      
      .lica-btn {
        display: flex;
        align-items: center;
        position: relative;
        height: 70px;
        cursor: pointer;
        background-color: var(--btnMain);
        border: 1px solid #2d2d2d;
        border-radius: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      
      .lica-btn:hover {
        background-color: var(--btnHover);
      }
      
      .lica-btn:active {
        background-color: var(--btnActive);
      }
      
      .lica-btn__title {
        padding-left: 5px;
        width: 130px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 16px;
        color: black;
      }
      
      .lica-btn__edit {
        width: 15px;
        height: 15px;
        position: absolute;
        right: 13%;
        background: url("https://svgshare.com/i/tqA.svg");
        background-position: center;
        background-size: cover;
        cursor: default !important;
      }
      
      .lica-btn__edit:hover {
        background-color: var(--btnEditHover);
      }
      
      .lica-btn__edit:active {
        background-color: var(--btnEditActive);
      }
      
      .lica-btn__delete {
        width: 15px;
        height: 15px;
        position: absolute;
        right: 2%;
        background: url("https://svgshare.com/i/toz.svg");
        background-position: center;
        background-size: cover;
        cursor: default !important;
      }
      
      .lica-btn__delete:hover {
        background-color: var(--btnEditHover);
      }
      
      .lica-btn__delete:active {
        background-color: var(--btnEditActive);
      }
      
      .lica-btn__accept {
        width: 15px;
        height: 15px;
        position: absolute;
        right: 13%;
        background: url("https://svgshare.com/i/tpr.svg");
        background-position: center;
        background-size: cover;
        cursor: default !important;
      }
      
      .lica-btn__accept:hover {
        background-color: var(--btnEditHover);
      }
      
      .lica-btn__accept:active {
        background-color: var(--btnEditActive);
      }
      
      .lica-btn__cancel {
        width: 15px;
        height: 15px;
        position: absolute;
        right: 2%;
        background: url("https://svgshare.com/i/tpT.svg");
        background-position: center;
        background-size: cover;
        cursor: default !important;
      }
      
      .lica-btn__cancel:hover {
        background-color: var(--btnEditHover);
      }
      
      .lica-btn__cancel:active {
        background-color: var(--btnEditActive);
      }
      
      .lica-btn__input {
        position: relative;
        height: 25px;
        width: 126px;
        left: 3px;
        font-size: 16px;
      }
      
      .lica-btn__input:focus {
        outline: 2px solid #715fde;
      }
      
      /*======================== modal- categories */
      .categories {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 101%;
        background-color: #2d2d2d;
      }
      
      .categories__header {
        position: relative;
        top: 0;
        height: 20%;
        background-color: var(--categoriesColors);
        border-radius: 10px 10px 0px 0px;
        border: 1px solid rgb(108, 117, 125);
      }
      
      .categories__title {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 30px;
        font-weight: 100;
        color: #fff;
        width: 354px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      
      .categories__buttons {
        display: flex;
        justify-content: center;
        height: 40px;
        font-size: 15px;
      }
      
      .categories__back {
        flex: 1;
      }
      
      .categories__new_category {
        flex: 1;
      }
      
      .categories__input {
        position: absolute;
        top: 58%;
        left: 12%;
        font-size: 20px;
        padding: 10px;
      }
      
      .categories__body {
        display: grid;
        height: 70%;
        min-height: 200px;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(auto-fill, 70px);
        gap: 4px;
        overflow-y: scroll;
        padding: 5px 0;
      }
      
      /* ============== categories footer ============ */
      .categories__footer {
        position: absolute;
        bottom: 0px;
        left: 0px;
        height: 70px;
        width: 100%;
      }
      
      .categories__footer-template {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 70px;
        width: 100%;
        background-color: rgb(224, 224, 224);
        color: black;
        cursor: pointer;
        border-radius: 0px 0px 10px 10px;
        border: 1px solid rgb(108, 117, 125);
      }
      .categories__footer-template:hover {
        background-color: var(--btnHover);
      }
      .categories__footer-template:active {
        background-color: var(--btnActive);
      }
      
      .categories__footer-title {
        font-weight: 100;
        font-size: 20px;
      }
      
      .categories__footer-spacer {
        height: 20px;
        width: 40px;
      }
      
      .categories__footer-edit {
        background: url("https://svgshare.com/i/tqA.svg");
        background-position: center;
        background-size: cover;
        cursor: default;
        font-size: 16px;
        width: 20px;
        height: 20px;
        cursor: default !important;
      }
      
      .categories__footer-edit:hover {
        background-color: var(--btnEditHover);
      }
      
      .categories__footer-edit:active {
        background-color: var(--btnEditActive);
      }
      
      /*======================== modal- templates */
      .templates {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 20;
        width: 100%;
        height: 100%;
        background-color: #2d2d2d;
      }
      
      .templates__header {
        position: relative;
        top: 0;
        height: 20%;
        background-color: var(--templatesColors);
        border-radius: 10px 10px 0px 0px;
        border: 1px solid rgb(108, 117, 125);
      }
      
      .templates__title {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 30px;
        font-weight: 100;
        color: #fff;
        width: 354px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      
      .templates__buttons {
        display: flex;
        justify-content: center;
        height: 40px;
        font-size: 15px;
      }
      
      .templates__back {
        flex: 1;
      }
      
      .templates__new_template {
        flex: 1;
      }
      
      .templates__input {
        position: absolute;
        top: 58%;
        left: 12%;
        font-size: 20px;
        padding: 10px;
      }
      
      .templates__body {
        display: grid;
        height: 70%;
        min-height: 200px;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(auto-fill, 70px);
        gap: 4px;
        overflow-y: scroll;
        padding: 5px 0;
      }
      
      /* ==================== templates footer */
      /* Modal template */
      .lica-modalTemplate {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 1;
        background-color: rgba(128, 128, 128, 0.396);
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
      .lica-modalContent {
        position: relative;
        width: 80%;
        height: 600px;
        border-radius: 10px;
        background-color: var(--templatesColors);
      }
      
      .lica-modalTemplateName {
        position: relative;
        font-size: 20px;
        padding: 10px;
        margin-top: 10px;
        margin-left: 10px;
        height: 43px;
      }
      
      .lica-modalSave {
        font-size: 20px;
        height: 42px;
        width: 80px;
      }
      
      .lica-modalCancel {
        font-size: 20px;
        height: 42px;
        width: 80px;
      }
      
      .lica-modalText {
        overflow: auto;
        resize: horizontal;
        position: relative;
        left: 10px;
        top: 20px;
        font-size: 16px;
        padding: 10px;
        height: 510px;
        width: 660px;
      }
      
      .lica-modalInstruction {
        font-size: 16px;
        color: rgba(255, 255, 255, 0.8392156863);
        position: absolute;
        top: 70px;
        right: 50px;
      }
      
      .lica-modalInstructionRU {
        margin-bottom: 20px;
      }
      
      .highlight {
        color: black;
        font-weight: bold;
      }
      
      /*=========================================Footer====================================== */
      .container__footer {
        position: absolute;
        bottom: 0px;
        left: 0px;
        height: 70px;
        width: 100%;
      }
      
      .container__footer-template {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 70px;
        width: 100%;
        margin-top: 10px;
        background-color: rgb(224, 224, 224);
        color: black;
        cursor: pointer;
        border-radius: 0px 0px 10px 10px;
        border: 1px solid rgb(108, 117, 125);
      }
      
      .container__footer-template:hover {
        background-color: var(--btnHover);
      }
      
      .container__footer-template:active {
        background-color: var(--btnActive);
      }
      
      .container__footer-title {
        font-weight: 100;
        font-size: 20px;
      }
      
      .container__footer-spacer {
        height: 20px;
        width: 40px;
      }
      
      .container__footer-edit {
        background: url("https://svgshare.com/i/tqA.svg");
        background-position: center;
        background-size: cover;
        cursor: default;
        font-size: 16px;
        width: 20px;
        height: 20px;
        cursor: default !important;
      }
      
      .container__footer-edit:hover {
        background-color: var(--btnEditHover);
      }
      
      .container__footer-edit:active {
        background-color: var(--btnEditActive);
      }
      
      /* ===================media queries */
      @media (max-width: 1500px) {
        .lica-modalText {
          width: 50%;
        }
      }
      @media (max-width: 1300px) {
        .lica-modalText {
          width: 400px;
        }
      }
      @media (max-width: 1175px) {
        .lica-modalText {
          width: 98%;
          height: 250px;
        }
        .lica-modalInstruction {
          top: 340px;
          left: 30px;
        }
      }
      
      /*# sourceMappingURL=main.css.map */
      
    `;
    //#endregion
    
    // settings for the app to be injected 
    //#region 
    const parentMain = document.querySelector('.menu-sidebar.sidebar') as HTMLDivElement;
    const container = document.createElement('div')  as HTMLDivElement;
    container.classList.add('lica-container')
    parentMain.appendChild(container)
    //#endregion
    

    // html
    container.innerHTML = `
    <div class="container">

    <div class="container__header">
        <h1 class="container__header-title">Main Menu</h1>
        <div class="container__header-buttons">
            <button class="container__header-buttons-new">Add new button</button>
            <button class="container__header-buttons-spam">Spam</button>
        </div>
        <input placeholder="Search..." type="text" class="container__header-input">
    </div>


    <div class="container__body">
    </div>
    

    <div class="container__footer">
        <div class="container__footer-template">
            <h3 class="container__footer-title">Empty Template</h3>
            <div class="container__footer-spacer"></div>
                <button class="container__footer-edit"></button>
        </div>
    </div>


</div>
    `;


    // logic
    const licaBody = document.querySelector('.container__body') as HTMLElement;
    const addNewLanguageBtn = document.querySelector('.container__header-buttons-new') as HTMLButtonElement;
    const spamBtn = document.querySelector('.container__header-buttons-spam') as HTMLButtonElement;



    // global variables
    let buttonsArray = JSON.parse(localStorage.getItem('langs') || '[]')
    console.log(`buttonsArray:`, buttonsArray)

    let emptyTemplateLvl1Array = JSON.parse(localStorage.getItem('template1') || '[]')
    // ======================


    interface BtnObject {
        id: string,
        title: string,
        categories: [][],
    }
    interface CategoryObj {
        id: string,
        title: string,
        templates: [],
        languageID: string,
    }
    interface TemplateObj {
        id: string,
        title: string,
        text: string,
        categoryID: string,
    }

    // spam button
    spamBtn.addEventListener('click', () => {
        console.log(buttonsArray)
    })

    // Add new language - listener
    addNewLanguageBtn.addEventListener('click', () => {
    const btnObject: BtnObject = {
        id: (Date.now()).toString(),
        title: 'New Language',
        categories: [],
    }

    buttonsArray.push(btnObject)
    console.log(buttonsArray)
    localStorage.setItem('langs', JSON.stringify(buttonsArray))
    createButton(btnObject,licaBody)

})

    // 1 level.
    function createButton(btnObject: BtnObject, parent:HTMLElement) {
    // create main button
    const newButton = document.createElement('div')
    parent.appendChild(newButton)
    const newButtonTitle = document.createElement('p')
    newButtonTitle.classList.add('lica-btn__title')
    newButtonTitle.innerText = btnObject.title;
    newButton.title = btnObject.title;
    newButton.appendChild(newButtonTitle)
    newButton.id = btnObject.id;
    newButton.classList.add('lica-btn')

    createEditBtn(newButton, btnObject)
    createDeleteBtn(newButton, btnObject)

        //Level 2
        newButton.addEventListener('click', () => {
            categoriesModal(btnObject)
        })

}
    function createEditBtn(parent:HTMLElement, btnObject:BtnObject) {
        const btnEdit = document.createElement('button')
        btnEdit.classList.add('lica-btn__edit')
        parent.appendChild(btnEdit);

        // btnEdit listener
        btnEdit.addEventListener('click', (e) => {
            e.stopPropagation()
            editButtonsChange(btnObject)
        })
}
    function editButtonsChange(btnObject:BtnObject) {
        const parent = document.getElementById(btnObject.id)
        const btnTitle = parent?.querySelector('.lica-btn__title') as HTMLElement
        const btnEdit = parent?.querySelector('.lica-btn__edit') as HTMLElement
        const btnDelete = parent?.querySelector('.lica-btn__delete') as HTMLElement
        
        
        editBtnChange(btnEdit)
        function editBtnChange(parent: HTMLElement) {
            // change edit btn to accept btn, delete btn to cancel btn
            const acceptBtn = document.createElement('button')
            acceptBtn.classList.add('lica-btn__accept')
            parent.replaceWith(acceptBtn)

            replaceTitleWithInput(parent, btnObject)
            function replaceTitleWithInput(parent: HTMLElement, btnObject:BtnObject) {
                // replace title with input
                const input = document.createElement('input')
                const cancelBtn = document.createElement('button')
                cancelBtn.classList.add('lica-btn__cancel')
                parent.appendChild(input)
                input.classList.add('lica-btn__input')
                btnTitle.replaceWith(input)

                    changeTitle(btnObject)
                    function changeTitle(btnObject:BtnObject) {
                        // change title of the button based on input
                        acceptBtn.addEventListener('click', () => {
                            btnObject.title = input.value;
                            btnTitle.innerText = input.value;
                            localStorage.setItem('langs', JSON.stringify(buttonsArray))
                            input.replaceWith(btnTitle)
                            acceptBtn.replaceWith(btnEdit)
                            cancelBtn.replaceWith(btnDelete)

                        })
                    }
                    cancelBtnChange()
                    function cancelBtnChange() {
                        btnDelete.replaceWith(cancelBtn)
                        cancelBtn.addEventListener('click', () => {
                            cancelBtn.replaceWith(btnDelete)
                            input.replaceWith(btnTitle)
                            acceptBtn.replaceWith(btnEdit)
                        })
                    }

                    cancelBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                    })

                    input.addEventListener('click', (e) => {
                        e.stopPropagation();
                    })
            }

            acceptBtn.addEventListener('click', (e) => {
                e.stopPropagation();
            })
            
        }

        editBtnDelete(btnDelete)
        function editBtnDelete(parent: HTMLElement) {
            // change delete btn to accept btn
            const acceptBtn = document.createElement('button')
            acceptBtn.classList.add('lica-btn__accept')
            parent.replaceWith(acceptBtn)
        }

}

    function createDeleteBtn(parent:HTMLElement,btnObject:BtnObject) {
        const btnDelete = document.createElement('button')
        btnDelete.classList.add('lica-btn__delete')
        parent.appendChild(btnDelete);

        deleteBtnsChange(parent,btnObject)
        function deleteBtnsChange(parent:HTMLElement,btnObject:BtnObject) {
            btnDelete.addEventListener('click', (e) => {
                e.stopPropagation()
                const btnEdit = parent?.querySelector('.lica-btn__edit') as HTMLElement
                const acceptBtn = document.createElement('button')
                const cancelBtn = document.createElement('button')
                acceptBtn.classList.add('lica-btn__accept')
                cancelBtn.classList.add('lica-btn__cancel')

                btnEdit.replaceWith(acceptBtn)
                btnDelete.replaceWith(cancelBtn)

                acceptBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    buttonsArray.forEach((item:any,index:any)  => {
                        if(item.id === btnObject.id) {
                            buttonsArray.splice(index,1)
                            localStorage.setItem('langs', JSON.stringify(buttonsArray))
                            parent.remove();
                        }
                    })
                })
                cancelBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    acceptBtn.replaceWith(btnEdit)
                    cancelBtn.replaceWith(btnDelete)
                })
            })
        }
}

    // render language buttons - lvl 1
    renderLanguages(licaBody)
    function renderLanguages(parent:HTMLElement) {
    buttonsArray.forEach((item:any) => {
        // create main button
        const newButton = document.createElement('div')
        parent.appendChild(newButton)
        const newButtonTitle = document.createElement('p')
        newButtonTitle.classList.add('lica-btn__title')
        newButtonTitle.innerText = item.title;
        newButton.title = item.title;
        newButton.appendChild(newButtonTitle)
        newButton.id = item.id;
        newButton.classList.add('lica-btn')

        createEditBtn(newButton, item)
        createDeleteBtn(newButton, item)

                //Level 2
                newButton.addEventListener('click', () => {
                    categoriesModal(item)
                })
    })

}

    // categories modal 
    function categoriesModal(btnObject:BtnObject) {

        const categories = document.createElement('div')
        categories.classList.add('categories')
        categories.innerHTML = `
        <!-- modal-categories -->
            <div class="categories">

                <nav class="categories__header">
                    <h2 class="categories__title"></h2>
                    <div class="categories__buttons">
                        <button class="categories__back"><< Back</button>
                        <button class="categories__new_category">Add new category</button>
                    </div>
                    <input class="categories__input" type="text" placeholder="Search...">
                </nav>

                
                <div class="categories__body"></div>


                <footer class="categories__footer">
                    <div class="categories__footer">
                        <div class="categories__footer-template">
                            <h3 class="categories__footer-title">Empty Template</h3>
                            <div class="categories__footer-spacer"></div>
                            <button class="container__footer-edit"></button>
                        </div>
                    </div>
                </footer>

            </div>

        `
        container.appendChild(categories)

        const categoriesBackBtn = document.querySelector('.categories__back') as HTMLElement;
        const addNewCatBtn = document.querySelector('.categories__new_category') as HTMLElement;
        const categoriesTitle = document.querySelector('.categories__title') as HTMLElement;
        categoriesTitle.innerText = btnObject.title;
        categories.id = btnObject.id
        const categoriesBody = document.querySelector('.categories__body') as HTMLElement;


        // back btn
        categoriesBackBtn.addEventListener('click', () => {
            categories.remove();
        })

        // add new category buttons
        addNewCatBtn.addEventListener('click', () => {
            const categoryObj: CategoryObj = {
                id: (Date.now()).toString(),
                title: 'New Category',
                languageID: (btnObject.id).toString(),
                templates: [],
            }

            // adding category object to buttons[category]
            buttonsArray.forEach((item:any) => {
                if(item.id === categoryObj.languageID) {
                    item.categories.push(categoryObj)
                }           
            })
            console.log(buttonsArray)
            localStorage.setItem('langs', JSON.stringify(buttonsArray))

            createButton(categoryObj, categoriesBody)

        })
        function createButton(categoryObj:CategoryObj, parent:HTMLElement) {
            // create main button
            const newButton = document.createElement('div')
            parent.appendChild(newButton)
            const newButtonTitle = document.createElement('p')
            newButtonTitle.classList.add('lica-btn__title')
            newButtonTitle.innerText = categoryObj.title;
            newButton.title = categoryObj.title;
            newButton.appendChild(newButtonTitle)
            newButton.id = categoryObj.id;
            newButton.classList.add('lica-btn')


            // create edit btn
            createEditBtnCategories(categoryObj,newButton)
            function createEditBtnCategories(categoryObj:CategoryObj, parent:HTMLElement) {
                const editBtn = document.createElement('button')
                editBtn.classList.add('lica-btn__edit')
                parent.appendChild(editBtn)

                editBtn.addEventListener('click', (e) => {
                    e.stopPropagation();

                    // change title to input, and add accept and cance lbuttons
                    buttonsChange(categoryObj,newButton)
                    function buttonsChange(categoryObj:CategoryObj, parent:HTMLElement){
                        const btnEdit = parent.querySelector('.lica-btn__edit') as HTMLElement
                        const btnDelete = parent.querySelector('.lica-btn__delete') as HTMLElement
                        const btnTitle = parent.querySelector('.lica-btn__title') as HTMLElement

                        const input = document.createElement('input')
                        input.classList.add('lica-btn__input')
                        btnTitle.replaceWith(input)

                        const acceptBtn = document.createElement('button')
                        acceptBtn.classList.add('lica-btn__accept')
                        btnEdit.replaceWith(acceptBtn)

                        const cancelBtn = document.createElement('button')
                        cancelBtn.classList.add('lica-btn__cancel')
                        btnDelete.replaceWith(cancelBtn)

                        //input
                        input.addEventListener('click', (e) => {
                            e.stopPropagation()
                        })

                        //accept
                        acceptBtn.addEventListener('click', (e) => {
                            e.stopPropagation();
                            categoryObj.title = input.value;
                            newButtonTitle.innerText = input.value; 
                            localStorage.setItem('langs', JSON.stringify(buttonsArray))
                            console.log(buttonsArray)

                            input.replaceWith(btnTitle)
                            acceptBtn.replaceWith(btnEdit)
                            cancelBtn.replaceWith(btnDelete)
                        })

                        // cancel 
                        cancelBtn.addEventListener('click', (e) => {
                            e.stopPropagation();
                            input.replaceWith(btnTitle)
                            acceptBtn.replaceWith(btnEdit)
                            cancelBtn.replaceWith(btnDelete)
                        })
                    }
                })
            }
            // create delete btn
            createDeleteBtnCategories(newButton)
            function createDeleteBtnCategories(parent:HTMLElement) {
                const deleteBtn = document.createElement('button')
                deleteBtn.classList.add('lica-btn__delete')
                parent.appendChild(deleteBtn) 

                deleteBtn.addEventListener('click', (e) => {
                    e.stopPropagation();

                    // change buttons to accept and cancel
                    buttonsChange(newButton)
                    function buttonsChange(parent:HTMLElement) {
                        const btnEdit = parent.querySelector('.lica-btn__edit') as HTMLElement
                        const btnDelete = parent.querySelector('.lica-btn__delete') as HTMLElement


                        const acceptBtn = document.createElement('button')
                        acceptBtn.classList.add('lica-btn__accept')
                        btnEdit.replaceWith(acceptBtn)

                        const cancelBtn = document.createElement('button')
                        cancelBtn.classList.add('lica-btn__cancel')
                        btnDelete.replaceWith(cancelBtn)

                        //accept
                        acceptBtn.addEventListener('click', (e:MouseEvent) => {
                            e.stopPropagation();
                            const parent = e.currentTarget as HTMLElement;
                            buttonsArray.forEach((item:any)=> {
                                item.categories.forEach((category:any,index:any) => {
                                    if(category.id === parent.parentElement!.id) {
                                        item.categories.splice(index, 1)
                                        parent.parentElement!.remove()
                                        localStorage.setItem('langs', JSON.stringify(buttonsArray))
                                    }
                                })
                            })
                        })

                        //cancel
                        cancelBtn.addEventListener('click', (e) => {
                            e.stopPropagation();
                            acceptBtn.replaceWith(btnEdit)
                            cancelBtn.replaceWith(btnDelete)
                        })
                    }
                })
            }

            newButton.addEventListener('click', () => {
                templatesModal(categoryObj)
            })
        }


        // render logic for lvl 2
        renderCategories()
        function renderCategories() {
            buttonsArray.forEach((item:any)=> {
                item.categories.forEach((category:any) => {
                    if(category.languageID === categories.id) {
                        createButton(category, categoriesBody)
                    }
                })
            })
        }







        //render templates for categories - lvl 3
        function templatesModal(categoryObj:CategoryObj) {

        const templates = document.createElement('div')
        templates.classList.add('templates')
        templates.innerHTML = `
        <!-- modal-templates -->
            <div class="templates">


                <nav class="templates__header">
                    <h2 class="templates__title"></h2>
                    <div class="templates__buttons">
                        <button class="templates__back"><< Back</button>
                        <button class="templates__new_template">Add new template</button>
                    </div>
                    <input class='templates__input' type="text" placeholder="Search...">
                </nav>


                <div class="templates__body"></div>


                <footer class="categories__footer">
                    <div class="categories__footer">
                        <div class="categories__footer-template">
                            <h3 class="categories__footer-title">Empty Template</h3>
                            <div class="categories__footer-spacer"></div>
                            <button class="container__footer-edit"></button>
                        </div>
                    </div>
                </footer>


            </div>

        `
        categoriesBody.appendChild(templates)

        const templatesBackBtn = document.querySelector('.templates__back') as HTMLElement;
        const addNewTemplateBtn = document.querySelector('.templates__new_template') as HTMLElement;
        const templatesTitle = document.querySelector('.templates__title') as HTMLElement;
        templatesTitle.innerText = categoryObj.title;
        templates.id = categoryObj.id
        const templatesBody = document.querySelector('.templates__body') as HTMLElement;


        // back btn
        templatesBackBtn.addEventListener('click', () => {
            templates.remove();
        })

        // add new template buttons
        addNewTemplateBtn.addEventListener('click', () => {
            const templateObj: TemplateObj = {
                id: (Date.now()).toString(),
                title: 'New Template',
                categoryID: (categoryObj.id).toString(),
                text: `Hi #user_name#!\n<br>\nThank you for contacting our *brand* Support Team!\n<br>\n<br>\nIn order to receive a prompt response, we also advise you to contact live chat on our website. Our agents work 24/7 for you every day.\n<br>\nSincerely,\n<br>*brand* Support team`
            }

            buttonsArray.forEach((item:any) => {
                item.categories.forEach((category:any) => {
                    if(category.id === templateObj.categoryID) {
                        category.templates.push(templateObj)
                        localStorage.setItem('langs', JSON.stringify(buttonsArray))
                        console.log(buttonsArray)
                    }
                })
            })
            
            createTemplate(templateObj,templatesBody)

        })

        // create button
        function createTemplate(templateObj: TemplateObj,parent: HTMLElement ) {
            // create main button
            const newButton = document.createElement('div')
            parent.appendChild(newButton)
            const newButtonTitle = document.createElement('p')
            newButtonTitle.classList.add('lica-btn__title')
            newButtonTitle.innerText = templateObj.title;
            newButton.title = templateObj.title;
            newButton.appendChild(newButtonTitle)
            newButton.id = templateObj.id;
            newButton.classList.add('lica-btn')

            //open modal for templates
            createEditBtnTemplate(templateObj,newButton)
            function createEditBtnTemplate(templateObj: TemplateObj, parent: HTMLElement) {
                const editBtn = document.createElement('button')
                editBtn.classList.add('lica-btn__edit')
                parent.appendChild(editBtn)

                editBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    
                    const modal = document.createElement('div')
                    modal.id = templateObj.id;
                    modal.classList.add('lica-modalTemplate')
                    parentMain.appendChild(modal)
                    modal.innerHTML = `
                    <div class='lica-modalTemplate'>
                        <div class='lica-modalContent'>
                            <div class='lica-modalNav'>
                                <input class='lica-modalTemplateName' placeholder='Template name...'>
                                <button class='lica-modalSave'>Save</button>
                                <button class='lica-modalCancel'>Cancel</button>
                            </div>
                                
                            <div class='lica-modalBody'>
                                <textarea class='lica-modalText' cols="50" rows="20" placeholder="Ваш шаблон / Your template goes here..." ></textarea>
                                <div class="lica-modalInstruction">
                                <ol class='lica-modalInstructionRU'>
                                    <li><span class='highlight'>#user_name#</span class='highlight'> - заменится на имя игрока</li>
                                    <li>Вставить <span class='highlight'>&lt;br&gt;</span class='highlight'> для пробелов. </li>
                                    <li><span class='highlight'>*brand*</span class='highlight'> - заменится на бренд с которого пришло письмо</li>
                                </ol>
                                <ol class='lica-modalInstructionEN'>
                                    <li><span class='highlight'>#user_name#</span class='highlight'> - will be replaced with the player's name</li>
                                    <li>Insert <span class='highlight'>&lt;br&gt;</span class='highlight'> for spaces. </li>
                                    <li><span class='highlight'>*brand*</span class='highlight'> - will be replaced with the brand of the incoming letter.</li>
                                </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    `
                    //modal variables
                    const modalTemplate = document.querySelector('.lica-modalTemplate') as HTMLDivElement;
                    const modalContent = document.querySelector('.lica-modalContent') as HTMLDivElement;
                    const modalTemplateName = document.querySelector('.lica-modalTemplateName') as HTMLInputElement
                    const modalSave = document.querySelector('.lica-modalSave') as HTMLElement
                    const modalCancel = document.querySelector('.lica-modalCancel') as HTMLElement
                    const modalText = document.querySelector('.lica-modalText') as HTMLTextAreaElement;
                    
                    //close modal when clicked outsidee
                    modalTemplate.addEventListener('mousedown', (e:MouseEvent) => {
                        const computedStyle = window.getComputedStyle(modalContent)
                        if(modalContent.contains(e.target as Node)) {
                        } else {
                            modal.remove();
                        }
                    })

                      
                    // cancel button
                    modalCancel.addEventListener('click', (e) => {
                        modal.remove();
                    })

                    // save button
                    modalSave.addEventListener('click', (e) => {
                        e.stopPropagation();
                        templateObj.title = modalTemplateName.value;
                        templateObj.text = modalText.value;
                        newButtonTitle.innerText = modalTemplateName.value; 
                        console.log(templateObj)
                        localStorage.setItem('langs', JSON.stringify(buttonsArray))
                        console.log(buttonsArray)

                        modalTemplateName.value = 'Saved!'
                        modalText.value = 'Saved!'

                        setTimeout(() => {
                            modalTemplateName.value = templateObj.title;
                            modalText.value = templateObj.text;  
                        }, 600);
                    })

                    // render saved template name/text on open of modal
                    buttonsArray.forEach((item:any) => {
                        item.categories.forEach((category:any) => {
                            category.templates.forEach((template:any) => {
                                if(template.id === modal.id) {
                                    modalTemplateName.value = templateObj.title;
                                    modalText.value = templateObj.text;

                                }
                            })
                        })
                    })
                })
            }


            // create delete btn
            createDeleteBtnCategories(newButton)
            function createDeleteBtnCategories(parent: HTMLElement) {
                const deleteBtn = document.createElement('button')
                deleteBtn.classList.add('lica-btn__delete')
                parent.appendChild(deleteBtn) 

                deleteBtn.addEventListener('click', (e) => {
                    e.stopPropagation();

                    // change buttons to accept and cancel
                    buttonsChange(newButton)
                    function buttonsChange(parent:HTMLElement) {
                        const btnEdit = parent.querySelector('.lica-btn__edit') as HTMLElement
                        const btnDelete = parent.querySelector('.lica-btn__delete') as HTMLElement


                        const acceptBtn = document.createElement('button')
                        acceptBtn.classList.add('lica-btn__accept')
                        btnEdit.replaceWith(acceptBtn)

                        const cancelBtn = document.createElement('button')
                        cancelBtn.classList.add('lica-btn__cancel')
                        btnDelete.replaceWith(cancelBtn)

                        //accept
                        acceptBtn.addEventListener('click', (e:MouseEvent) => {
                            e.stopPropagation();
                            const parent = e.currentTarget as HTMLElement;
                            // loop over languages. item = langauge
                            buttonsArray.forEach((item:any) => { 
                                // loop over categoris. category = category
                                item.categories.forEach((category:any) => {
                                    // loop over templates. template = template
                                    category.templates.forEach((template:any,index:any) => {
                                        if(template.id === parent.parentElement!.id) {
                                            category.templates.splice(index, 1)
                                            console.log(buttonsArray)
                                            parent.parentElement!.remove()
                                            localStorage.setItem('langs', JSON.stringify(buttonsArray))
                                        }
                                    })
                                        
                                })
                            })
                        })

                        //cancel
                        cancelBtn.addEventListener('click', (e) => {
                            e.stopPropagation();
                            acceptBtn.replaceWith(btnEdit)
                            cancelBtn.replaceWith(btnDelete)
                        })
                    }
                })
            }



            // insert text in textarea when template is clicked;
            newButton.addEventListener('click', () => {
                //function to insert template
                insertTemplate(templateObj)
                function insertTemplate(templateObj:TemplateObj) {
                        let brand = document.querySelector(
                            '#page-wrapper > div > div > section > div > main > div.thread-details > div > div:nth-child(2) > div > div:nth-child(2) > b'
                        )?.nextElementSibling?.innerHTML as any;

                        let word = 'brand';
                        let pattern = new RegExp('\\*' + word + '\\*', 'g');
                        const openMail = document.querySelector(
                        '#page-wrapper > div > div > section > div > main > div.reply > p'
                        ) as HTMLButtonElement;
                        openMail.click();
                        async function openEditor() {
                            const sourceBtn = document.getElementById('cke_39') as HTMLElement;
                            sourceBtn.click();
                            await delay(100);
                            const textArea = document.querySelector(
                            '.cke_source.cke_reset.cke_enable_context_menu.cke_editable.cke_editable_themed.cke_contents_ltr'
                            ) as HTMLTextAreaElement;
                            textArea.value = templateObj.text;
                            textArea.value = textArea.value.replace(pattern, brand);
                            await delay(100);
                            sourceBtn.click();
                            console.log('Finished!');
                        }
                        function delay(ms:number) {
                            return new Promise((resolve) => setTimeout(resolve, ms));
                        }
                        openEditor();
                } 
            })

        }

        // render templates for categories - lvl 3
        renderTemplates(categoryObj, templatesBody);
        function renderTemplates(categoryObj: CategoryObj, parent: HTMLElement) {
            const category = buttonsArray
            .flatMap((item:any) => item.categories)
            .find((category:any) => category.id === categoryObj.id);
        
            if (category) {
            category.templates.forEach((template: any) => {
                createTemplate(template, parent);
            });
            }
        }
        } 
    }



    //empty template lvl 1 logic
    const emptyTemplate1lvl = document.querySelector('.container__footer') as HTMLElement;

    const emptyTemplate1lvlEdit = document.querySelector('.container__footer-edit') as HTMLElement;

    // save a template
    emptyTemplate1lvlEdit.addEventListener('click', (e) => {
        // save new template
        openEmptyTemplateLvl1Edit()
        function openEmptyTemplateLvl1Edit() {
            e.stopPropagation();
                    
            const modal = document.createElement('div')
            modal.id = 'emptyTemplate';
            modal.classList.add('lica-modalTemplate')
            parentMain.appendChild(modal)
            modal.innerHTML = `
            <div class='lica-modalTemplate'>
                <div class='lica-modalContent'>
                    <div class='lica-modalNav'>
                        <button class='lica-modalSave'>Save</button>
                        <button class='lica-modalCancel'>Cancel</button>
                    </div>
                        
                    <div class='lica-modalBody'>
                        <textarea class='lica-modalText' cols="50" rows="20" placeholder="Ваш шаблон / Your template goes here..." ></textarea>
                        <div class="lica-modalInstruction">
                        <ol class='lica-modalInstructionRU'>
                            <li><span class='highlight'>#user_name#</span class='highlight'> - заменится на имя игрока</li>
                            <li>Вставить <span class='highlight'>&lt;br&gt;</span class='highlight'> для пробелов. </li>
                            <li><span class='highlight'>*brand*</span class='highlight'> - заменится на бренд с которого пришло письмо</li>
                        </ol>
                        <ol class='lica-modalInstructionEN'>
                            <li><span class='highlight'>#user_name#</span class='highlight'> - will be replaced with the player's name</li>
                            <li>Insert <span class='highlight'>&lt;br&gt;</span class='highlight'> for spaces. </li>
                            <li><span class='highlight'>*brand*</span class='highlight'> - will be replaced with the brand of the incoming letter.</li>
                        </ol>
                        </div>
                    </div>
                </div>
            </div>
            `
            //modal variables
            const modalTemplate = document.querySelector('.lica-modalTemplate') as HTMLDivElement;
            const modalContent = document.querySelector('.lica-modalContent') as HTMLDivElement;
            const modalSave = document.querySelector('.lica-modalSave') as HTMLElement
            const modalCancel = document.querySelector('.lica-modalCancel') as HTMLElement
            const modalText = document.querySelector('.lica-modalText') as HTMLTextAreaElement;

            //close modal when clicked outsidee
            modalTemplate.addEventListener('mousedown', (e:MouseEvent) => {
                const computedStyle = window.getComputedStyle(modalContent)
                if(modalContent.contains(e.target as Node)) {
                } else {
                    modal.remove();
                }
            })

                
            // cancel button
            modalCancel.addEventListener('click', (e) => {
                modal.remove();
            })

            // save button
            modalSave.addEventListener('click', (e) => {
                e.stopPropagation();
                emptyTemplateLvl1Array = [];
                const emptyTemplateObj: TemplateObj = {
                    id: (Date.now()).toString(),
                    title: 'emptyTemplate1',
                    categoryID: 'none',
                    text: `Hi #user_name#!\n<br>\nThank you for contacting our *brand* Support Team!\n<br>\n<br>\nIn order to receive a prompt response, we also advise you to contact live chat on our website. Our agents work 24/7 for you every day.\n<br>\nSincerely,\n<br>*brand* Support team`
                }
                emptyTemplateObj.text = modalText.value;
                emptyTemplateLvl1Array
                .push(emptyTemplateObj)
                localStorage.setItem('template1', JSON.stringify(emptyTemplateLvl1Array))
                console.log(emptyTemplateLvl1Array)

                modalText.value = 'Saved!'
                setTimeout(() => {
                    modalText.value = emptyTemplateObj.text;  
                }, 600);
            })          

            // render template
            emptyTemplateLvl1Array.forEach((item:any) => {
                modalText.value = item.text;
                console.log(item)
            })
        };

    })

    //insert a template
    emptyTemplate1lvl.addEventListener('click', () => {
        insertTemplate(emptyTemplateLvl1Array[0])
        function insertTemplate(template: any) {
            let brand = document.querySelector(
                '#page-wrapper > div > div > section > div > main > div.thread-details > div > div:nth-child(2) > div > div:nth-child(2) > b'
            )?.nextElementSibling?.innerHTML as any;

            let word = 'brand';
            let pattern = new RegExp('\\*' + word + '\\*', 'g');
            const openMail = document.querySelector(
            '#page-wrapper > div > div > section > div > main > div.reply > p'
            ) as HTMLButtonElement;
            openMail.click();
            async function openEditor() {
                const sourceBtn = document.getElementById('cke_39') as HTMLElement;
                sourceBtn.click();
                await delay(100);
                const textArea = document.querySelector(
                '.cke_source.cke_reset.cke_enable_context_menu.cke_editable.cke_editable_themed.cke_contents_ltr'
                ) as HTMLTextAreaElement;
                textArea.value = template.text;
                textArea.value = textArea.value.replace(pattern, brand);
                await delay(100);
                sourceBtn.click();
                console.log('Finished!');
            }
            function delay(ms:number) {
                return new Promise((resolve) => setTimeout(resolve, ms));
            }
            openEditor();
        } 
    })







}, 2000);})();

// tsc --watch
// sass --watch ./main.scss:dist/main.css