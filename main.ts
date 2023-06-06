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
        top:5%;
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
        background-color: chartreuse;
        border: 1px solid #2d2d2d;
        border-radius: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
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
        background: url('https://svgshare.com/i/tqA.svg');
        background-position: center;
        background-size: cover;
      }
      .lica-btn__delete{
        width: 15px;
        height: 15px;
        position: absolute;
        right: 2%;
        background: url('https://svgshare.com/i/toz.svg');
        background-position: center;
        background-size: cover;
      }
      
      .lica-btn__accept{
        width: 15px;
        height: 15px;
        position: absolute;
        right: 13%;
        background: url('https://svgshare.com/i/tpr.svg');
        background-position: center;
        background-size: cover;
      }
      
      .lica-btn__cancel{
        width: 15px;
        height: 15px;
        position: absolute;
        right: 2%;
        background: url('https://svgshare.com/i/tpT.svg');
        background-position: center;
        background-size: cover;
      }
      
      .lica-btn__input{
        position: relative;
        height: 25px;
        width: 126px;
        left: 3px;
      }
      .lica-btn__input:focus {
      outline: 2px solid #715fde;
      }
      /*======================== modal- categories */
      .categories {
        position: absolute;
        top: 0;
        left:0;
        z-index: 1;
        width: 100%;
        height: 101%;
        background-color: #2d2d2d;
      }
      .categories__header {
        position: relative;
        top: 0;
        height: 20%;
        background-color: rgb(64, 67, 144);
      }
      .categories__title {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 30px;
        font-weight: 100;
        color: #fff;
      }
      .categories__buttons {
        display: flex;
        justify-content: center;
        height: 40px;
        font-size: 15px;
      }
    
        .categories__back{
            flex: 1;
        }
        .categories__new_category{
            flex: 1;
        }
        .buttons__spam{
            flex: 1;
        }
    
        .categories__input{ 
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
      .categories__footer {
        display: flex;
        justify-content: center;
        position: relative;
        bottom: 0;
        height: 70px;
        color: var(--text-color);
        background-color: rgb(64, 67, 144);
      }
      
      
      /*======================== modal- templates */
      .templates {
        position: absolute;
        top: 0;
        left:0;
        z-index: 20;
        width: 100%;
        height: 100%;
        background-color: #2d2d2d;
      }
      .templates__header {
        position: relative;
        top: 0;
        height: 20%;
        background-color: rgb(62, 194, 157);
      }
      .templates__title {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 30px;
        font-weight: 100;
        color: #fff;
      }
      .templates__buttons {
        display: flex;
        justify-content: center;
        height: 40px;
        font-size: 15px;
      }
      .templates__back{
        flex: 1;
      }
      .templates__new_template{
        flex: 1;
      }
      .buttons__spam{
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
        max-height: 400px;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(auto-fill, 70px);
        gap: 4px;
        overflow-y: scroll;
        padding: 5px 0;
      }
      .templates__footer {
        display: flex;
        justify-content: center;
        position: relative;
        bottom: 0;
        height: 10%;
        color: var(--text-color);
        background-color: rgb(62, 194, 157);
      }
    
      /* Modal template */
      .lica-modalTemplate {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(128, 128, 128, 0.396);
        display: flex;
        justify-content: center;
        align-items: center;
        
      }
      .lica-modalContent {
        position: relative;
        width: 1000px;
        height: 400px;
        background-color: rgb(92, 186, 181);
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
    .container__footer-title {
        font-weight: 100;
    }
    .container__footer-spacer {
        height: 20px;
        width: 40px;
    }
    .container__footer-title-edit {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;
    }
    .container__footer-edit {
        background-color: rgb(195, 195, 195);
        cursor: default;
        font-size: 16px;
    }
    `;
    //#endregion
    
    // settings for the app to be injected 
    //#region 
    const parent = document.querySelector('.menu-sidebar.sidebar') as HTMLDivElement;
    const container = document.createElement('div')  as HTMLDivElement;
    container.classList.add('lica-container')
    parent.appendChild(container)
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
        <div class="button">Hello</div>
    </div>
    

    <div class="container__footer">
        <div class="container__footer-template">
            <h3 class="container__footer-title">Empty Template</h3>
            <div class="container__footer-spacer"></div>
            <div class="container__footer-title-edit">
                <button class="container__footer-edit"></button>
            </div>
        </div>
    </div>


</div>
    `;


    // logic
    const licaBody = document.querySelector('.container__body') as HTMLElement;
    const addNewLanguageBtn = document.querySelector('.container__header-buttons-new') as HTMLButtonElement;
    const spamBtn = document.querySelector('.container__header-buttons-spam') as HTMLButtonElement;
    const textArea = document.querySelector(".cke_source.cke_reset.cke_enable_context_menu.cke_editable.cke_editable_themed.cke_contents_ltr") as HTMLTextAreaElement



    // global variables
    let buttonsArray = JSON.parse(localStorage.getItem('langs') || '[]')
    console.log(`buttonsArray:`, buttonsArray)
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
                        <button class="buttons__spam">SPAM</button>
                    </div>
                    <input class="categories__input" type="text" placeholder="Search...">
                </nav>
                <div class="categories__body"></div>
                <footer class="categories__footer">
                    <div class="categories__footer-button">
                        <h1 class="categories__footer-title">Empty template</h1>
                        <button class="categories__footer-settings">Settings</button>
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
                        <button class="buttons__spam">SPAM</button>
                    </div>
                    <input class='templates__input' type="text" placeholder="Search...">
                </nav>
                <div class="templates__body"></div>
                <footer class="templates__footer">
                    <div class="templates__footer-button">
                        <h1 class="templates__footer-title">Empty template</h1>
                        <button class="templates__footer-settings">Settings</button>
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
                text: `Ваш шаблон / Your template goes here`
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
                    parent.appendChild(modal)
                    modal.innerHTML = `
                    <div class='lica-modalTemplate'>
                        <div class='lica-modalContent'>
                            <div class='lica-modalNav'>
                                <input class='lica-modalTemplateName'>
                                <button class='lica-modalSave'>Save</button>
                                <button class='lica-modalCancel'>Cancel</button>
                            </div>
                                
                            <div class='lica-modalBody'>
                                <textarea class='lica-modalText' cols="50" rows="20"></textarea> 
                            </div>
                        </div>
                    </div>
                    `
                    //modal variables
                    const modalTemplateName = document.querySelector('.lica-modalTemplateName') as HTMLInputElement
                    const modalSave = document.querySelector('.lica-modalSave') as HTMLElement
                    const modalCancel = document.querySelector('.lica-modalCancel') as HTMLElement
                    const modalText = document.querySelector('.lica-modalText') as HTMLTextAreaElement;
                    // cancel button
                    modalCancel.addEventListener('click', () => {
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
                textArea.value = templateObj.text;
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

    
}, 2000);})();