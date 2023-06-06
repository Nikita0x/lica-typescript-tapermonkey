"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./main.css");
//Insert your HTML code here to develop offline
// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
// <div class="lica-wrapper">
// <div class="lica-container">
//     <nav class="header">
//         <h2 class="header__title">Choose the language</h2>
//         <div class="header__buttons">
//             <button class="buttons__new_language">Add new language</button>
//             <button class="buttons__spam">SPAM</button>
//         </div>
//         <input type="text" placeholder="Search...">
//     </nav>
//     <section class="lica-body">
//         <div class="lica-btn">
//             <p class="lica-btn__title">Title</p>
//             <button class="lica-btn__edit">
//                 <svg width="64px" height="64px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Edit / Edit_Pencil_Line_02"> <path id="Vector" d="M4 20.0001H20M4 20.0001V16.0001L14.8686 5.13146L14.8704 5.12976C15.2652 4.73488 15.463 4.53709 15.691 4.46301C15.8919 4.39775 16.1082 4.39775 16.3091 4.46301C16.5369 4.53704 16.7345 4.7346 17.1288 5.12892L18.8686 6.86872C19.2646 7.26474 19.4627 7.46284 19.5369 7.69117C19.6022 7.89201 19.6021 8.10835 19.5369 8.3092C19.4628 8.53736 19.265 8.73516 18.8695 9.13061L18.8686 9.13146L8 20.0001L4 20.0001Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
//             </button>
//             <button class="lica-btn__delete"></button>
//         </div>
//     </section>
//     <h1 class="brand">Google</h1>
//     <textarea class='cke_source cke_reset cke_enable_context_menu cke_editable cke_editable_themed cke_contents_ltr' name="" id="testArea" cols="50" rows="20"></textarea>
//     <footer class="footer">
//         <div class="footer__button">
//             <h1 class="footer__title">Empty template</h1>
//             <button class="settings">Settings</button>
//         </div>
//     </footer>
// </div>
//     </div>
// `
// ============================Uncomment for production===========================================
setTimeout(() => {
    const parent = document.querySelector('.menu-sidebar.sidebar');
    parent.style.width = '400px';
    const container = document.createElement('div');
    container.innerHTML = `



  <div class="lica-container">
  
      <nav class="header">
          <h2 class="header__title">Choose the language</h2>
          <div class="header__buttons">
              <button class="buttons__new_language">Add new language</button>
              <button class="buttons__spam">SPAM</button>
          </div>
          <input type="text" placeholder="Search...">
      </nav>
  
  
      <section class="lica-body">
          <div class="lica-btn">
              <p class="lica-btn__title">Title</p>
              <button class="lica-btn__edit">
                  <svg width="64px" height="64px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Edit / Edit_Pencil_Line_02"> <path id="Vector" d="M4 20.0001H20M4 20.0001V16.0001L14.8686 5.13146L14.8704 5.12976C15.2652 4.73488 15.463 4.53709 15.691 4.46301C15.8919 4.39775 16.1082 4.39775 16.3091 4.46301C16.5369 4.53704 16.7345 4.7346 17.1288 5.12892L18.8686 6.86872C19.2646 7.26474 19.4627 7.46284 19.5369 7.69117C19.6022 7.89201 19.6021 8.10835 19.5369 8.3092C19.4628 8.53736 19.265 8.73516 18.8695 9.13061L18.8686 9.13146L8 20.0001L4 20.0001Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
              </button>
              <button class="lica-btn__delete"></button>
          </div>
  
      </section>
  
  
      <h1 class="brand">Google</h1>
  
  
      <textarea class='cke_source cke_reset cke_enable_context_menu cke_editable cke_editable_themed cke_contents_ltr' name="" id="testArea" cols="50" rows="20"></textarea>
  
  
  
      <footer class="footer">
          <div class="footer__button">
              <h1 class="footer__title">Empty template</h1>
              <button class="settings">Settings</button>
          </div>
      </footer>
  
  
  </div>
  
  


  `;
    container.classList.add('lica-wrapper');
    parent === null || parent === void 0 ? void 0 : parent.appendChild(container);
    const licaBody = document.querySelector('.lica-body');
    const addNewLanguageBtn = document.querySelector('.buttons__new_language');
    addNewLanguageBtn === null || addNewLanguageBtn === void 0 ? void 0 : addNewLanguageBtn.addEventListener('click', () => {
        createButton(licaBody);
    });
    function createButton(parentToAppendTo) {
        const newButton = document.createElement('div');
        newButton.classList.add('lica-btn');
        const newButtonTitle = document.createElement('h3');
        newButtonTitle.innerText = 'New Language';
        const newButtonEdit = document.createElement('button');
        newButtonEdit.innerText = 'Edit';
        newButton.appendChild(newButtonTitle);
        newButton.appendChild(newButtonEdit);
        parentToAppendTo.appendChild(newButton);
    }
}, 2500);
// =======================================================================
// global variables
let buttonsArray = JSON.parse(localStorage.getItem('langs') || '[]');
console.log(`buttonsArray:`, buttonsArray);
// ======================
const licaWrapper = document.querySelector('#app');
const licaBody = document.querySelector('.lica-body');
const addNewLanguageBtn = document.querySelector('.buttons__new_language');
const spamBtn = document.querySelector('.buttons__spam');
// const brand = document.querySelector('.brand')
const textArea = document.querySelector(".cke_source.cke_reset.cke_enable_context_menu.cke_editable.cke_editable_themed.cke_contents_ltr");
spamBtn.addEventListener('click', () => {
    console.log(buttonsArray);
});
// Add new language - listener
addNewLanguageBtn.addEventListener('click', () => {
    const btnObject = {
        id: (Date.now()).toString(),
        title: 'New Language',
        categories: [],
    };
    buttonsArray.push(btnObject);
    console.log(buttonsArray);
    localStorage.setItem('langs', JSON.stringify(buttonsArray));
    createButton(btnObject, licaBody);
});
// 1 level.
function createButton(btnObject, parent) {
    // create main button
    const newButton = document.createElement('div');
    parent.appendChild(newButton);
    const newButtonTitle = document.createElement('p');
    newButtonTitle.classList.add('lica-btn__title');
    newButtonTitle.innerText = btnObject.title;
    newButton.appendChild(newButtonTitle);
    newButton.id = btnObject.id;
    newButton.classList.add('lica-btn');
    createEditBtn(newButton, btnObject);
    createDeleteBtn(newButton, btnObject);
    //Level 2
    newButton.addEventListener('click', () => {
        categoriesModal(btnObject);
    });
}
function createEditBtn(parent, btnObject) {
    const btnEdit = document.createElement('button');
    btnEdit.classList.add('lica-btn__edit');
    parent.appendChild(btnEdit);
    // btnEdit listener
    btnEdit.addEventListener('click', (e) => {
        e.stopPropagation();
        editButtonsChange(btnObject);
    });
}
function editButtonsChange(btnObject) {
    const parent = document.getElementById(btnObject.id);
    const btnTitle = parent === null || parent === void 0 ? void 0 : parent.querySelector('.lica-btn__title');
    const btnEdit = parent === null || parent === void 0 ? void 0 : parent.querySelector('.lica-btn__edit');
    const btnDelete = parent === null || parent === void 0 ? void 0 : parent.querySelector('.lica-btn__delete');
    editBtnChange(btnEdit);
    function editBtnChange(parent) {
        // change edit btn to accept btn, delete btn to cancel btn
        const acceptBtn = document.createElement('button');
        acceptBtn.classList.add('lica-btn__accept');
        parent.replaceWith(acceptBtn);
        replaceTitleWithInput(parent, btnObject);
        function replaceTitleWithInput(parent, btnObject) {
            // replace title with input
            const input = document.createElement('input');
            const cancelBtn = document.createElement('button');
            cancelBtn.classList.add('lica-btn__cancel');
            parent.appendChild(input);
            input.classList.add('lica-btn__input');
            btnTitle.replaceWith(input);
            changeTitle(btnObject);
            function changeTitle(btnObject) {
                // change title of the button based on input
                acceptBtn.addEventListener('click', () => {
                    btnObject.title = input.value;
                    btnTitle.innerText = input.value;
                    localStorage.setItem('langs', JSON.stringify(buttonsArray));
                    input.replaceWith(btnTitle);
                    acceptBtn.replaceWith(btnEdit);
                    cancelBtn.replaceWith(btnDelete);
                });
            }
            cancelBtnChange();
            function cancelBtnChange() {
                btnDelete.replaceWith(cancelBtn);
                cancelBtn.addEventListener('click', () => {
                    cancelBtn.replaceWith(btnDelete);
                    input.replaceWith(btnTitle);
                    acceptBtn.replaceWith(btnEdit);
                });
            }
            cancelBtn.addEventListener('click', (e) => {
                e.stopPropagation();
            });
            input.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        }
        acceptBtn.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
    editBtnDelete(btnDelete);
    function editBtnDelete(parent) {
        // change delete btn to accept btn
        const acceptBtn = document.createElement('button');
        acceptBtn.classList.add('lica-btn__accept');
        parent.replaceWith(acceptBtn);
    }
}
function createDeleteBtn(parent, btnObject) {
    const btnDelete = document.createElement('button');
    btnDelete.classList.add('lica-btn__delete');
    parent.appendChild(btnDelete);
    deleteBtnsChange(parent, btnObject);
    function deleteBtnsChange(parent, btnObject) {
        btnDelete.addEventListener('click', (e) => {
            e.stopPropagation();
            const btnEdit = parent === null || parent === void 0 ? void 0 : parent.querySelector('.lica-btn__edit');
            const acceptBtn = document.createElement('button');
            const cancelBtn = document.createElement('button');
            acceptBtn.classList.add('lica-btn__accept');
            cancelBtn.classList.add('lica-btn__cancel');
            btnEdit.replaceWith(acceptBtn);
            btnDelete.replaceWith(cancelBtn);
            acceptBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                buttonsArray.forEach((item, index) => {
                    if (item.id === btnObject.id) {
                        buttonsArray.splice(index, 1);
                        localStorage.setItem('langs', JSON.stringify(buttonsArray));
                        parent.remove();
                    }
                });
            });
            cancelBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                acceptBtn.replaceWith(btnEdit);
                cancelBtn.replaceWith(btnDelete);
            });
        });
    }
}
// render language buttons - lvl 1
renderLanguages(licaBody);
function renderLanguages(parent) {
    buttonsArray.forEach((item) => {
        // create main button
        const newButton = document.createElement('div');
        parent.appendChild(newButton);
        const newButtonTitle = document.createElement('p');
        newButtonTitle.classList.add('lica-btn__title');
        newButtonTitle.innerText = item.title;
        newButton.appendChild(newButtonTitle);
        newButton.id = item.id;
        newButton.classList.add('lica-btn');
        createEditBtn(newButton, item);
        createDeleteBtn(newButton, item);
        //Level 2
        newButton.addEventListener('click', () => {
            categoriesModal(item);
        });
    });
}
function categoriesModal(btnObject) {
    const categories = document.createElement('div');
    categories.classList.add('categories');
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
                    <input type="text" placeholder="Search...">
                </nav>
                <div class="categories__body"></div>
                <footer class="categories__footer">
                    <div class="categories__footer-button">
                        <h1 class="categories__footer-title">Empty template</h1>
                        <button class="categories__footer-settings">Settings</button>
                    </div>
                </footer>
            </div>

        `;
    licaBody.appendChild(categories);
    const categoriesBackBtn = document.querySelector('.categories__back');
    const addNewCatBtn = document.querySelector('.categories__new_category');
    const categoriesTitle = document.querySelector('.categories__title');
    categoriesTitle.innerText = btnObject.title;
    categories.id = btnObject.id;
    const categoriesBody = document.querySelector('.categories__body');
    // back btn
    categoriesBackBtn.addEventListener('click', () => {
        categories.remove();
    });
    // add new category buttons
    addNewCatBtn.addEventListener('click', () => {
        const categoryObj = {
            id: (Date.now()).toString(),
            title: 'New Category',
            languageID: (btnObject.id).toString(),
            templates: [],
        };
        // adding category object to buttons[category]
        buttonsArray.forEach((item) => {
            if (item.id === categoryObj.languageID) {
                item.categories.push(categoryObj);
            }
        });
        console.log(buttonsArray);
        localStorage.setItem('langs', JSON.stringify(buttonsArray));
        createButton(categoryObj, categoriesBody);
    });
    function createButton(categoryObj, parent) {
        // create main button
        const newButton = document.createElement('div');
        parent.appendChild(newButton);
        const newButtonTitle = document.createElement('p');
        newButtonTitle.classList.add('lica-btn__title');
        newButtonTitle.innerText = categoryObj.title;
        newButton.appendChild(newButtonTitle);
        newButton.id = categoryObj.id;
        newButton.classList.add('lica-btn');
        // create edit btn
        createEditBtnCategories(categoryObj, newButton);
        function createEditBtnCategories(categoryObj, parent) {
            const editBtn = document.createElement('button');
            editBtn.classList.add('lica-btn__edit');
            parent.appendChild(editBtn);
            editBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                // change title to input, and add accept and cance lbuttons
                buttonsChange(categoryObj, newButton);
                function buttonsChange(categoryObj, parent) {
                    const btnEdit = parent.querySelector('.lica-btn__edit');
                    const btnDelete = parent.querySelector('.lica-btn__delete');
                    const btnTitle = parent.querySelector('.lica-btn__title');
                    const input = document.createElement('input');
                    input.classList.add('lica-btn__input');
                    btnTitle.replaceWith(input);
                    const acceptBtn = document.createElement('button');
                    acceptBtn.classList.add('lica-btn__accept');
                    btnEdit.replaceWith(acceptBtn);
                    const cancelBtn = document.createElement('button');
                    cancelBtn.classList.add('lica-btn__cancel');
                    btnDelete.replaceWith(cancelBtn);
                    //input
                    input.addEventListener('click', (e) => {
                        e.stopPropagation();
                    });
                    //accept
                    acceptBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        categoryObj.title = input.value;
                        newButtonTitle.innerText = input.value;
                        localStorage.setItem('langs', JSON.stringify(buttonsArray));
                        console.log(buttonsArray);
                        input.replaceWith(btnTitle);
                        acceptBtn.replaceWith(btnEdit);
                        cancelBtn.replaceWith(btnDelete);
                    });
                    // cancel 
                    cancelBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        input.replaceWith(btnTitle);
                        acceptBtn.replaceWith(btnEdit);
                        cancelBtn.replaceWith(btnDelete);
                    });
                }
            });
        }
        // create delete btn
        createDeleteBtnCategories(newButton);
        function createDeleteBtnCategories(parent) {
            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('lica-btn__delete');
            parent.appendChild(deleteBtn);
            deleteBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                // change buttons to accept and cancel
                buttonsChange(newButton);
                function buttonsChange(parent) {
                    const btnEdit = parent.querySelector('.lica-btn__edit');
                    const btnDelete = parent.querySelector('.lica-btn__delete');
                    const acceptBtn = document.createElement('button');
                    acceptBtn.classList.add('lica-btn__accept');
                    btnEdit.replaceWith(acceptBtn);
                    const cancelBtn = document.createElement('button');
                    cancelBtn.classList.add('lica-btn__cancel');
                    btnDelete.replaceWith(cancelBtn);
                    //accept
                    acceptBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const parent = e.currentTarget;
                        buttonsArray.forEach((item) => {
                            item.categories.forEach((category, index) => {
                                if (category.id === parent.parentElement.id) {
                                    item.categories.splice(index, 1);
                                    parent.parentElement.remove();
                                    localStorage.setItem('langs', JSON.stringify(buttonsArray));
                                }
                            });
                        });
                    });
                    //cancel
                    cancelBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        acceptBtn.replaceWith(btnEdit);
                        cancelBtn.replaceWith(btnDelete);
                    });
                }
            });
        }
        newButton.addEventListener('click', () => {
            templatesModal(categoryObj);
        });
    }
    // render logic for lvl 2
    renderCategories();
    function renderCategories() {
        buttonsArray.forEach((item) => {
            item.categories.forEach((category) => {
                if (category.languageID === categories.id) {
                    createButton(category, categoriesBody);
                }
            });
        });
    }
    //render templates for categories - lvl 3
    function templatesModal(categoryObj) {
        const templates = document.createElement('div');
        templates.classList.add('templates');
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
                    <input type="text" placeholder="Search...">
                </nav>
                <div class="templates__body"></div>
                <footer class="templates__footer">
                    <div class="templates__footer-button">
                        <h1 class="templates__footer-title">Empty template</h1>
                        <button class="templates__footer-settings">Settings</button>
                    </div>
                </footer>
            </div>

        `;
        categoriesBody.appendChild(templates);
        const templatesBackBtn = document.querySelector('.templates__back');
        const addNewTemplateBtn = document.querySelector('.templates__new_template');
        const templatesTitle = document.querySelector('.templates__title');
        templatesTitle.innerText = categoryObj.title;
        templates.id = categoryObj.id;
        const templatesBody = document.querySelector('.templates__body');
        // back btn
        templatesBackBtn.addEventListener('click', () => {
            templates.remove();
        });
        // add new template buttons
        addNewTemplateBtn.addEventListener('click', () => {
            const templateObj = {
                id: (Date.now()).toString(),
                title: 'New Template',
                categoryID: (categoryObj.id).toString(),
                text: `Ваш шаблон / Your template goes here`
            };
            buttonsArray.forEach((item) => {
                item.categories.forEach((category) => {
                    if (category.id === templateObj.categoryID) {
                        category.templates.push(templateObj);
                        localStorage.setItem('langs', JSON.stringify(buttonsArray));
                        console.log(buttonsArray);
                    }
                });
            });
            createTemplate(templateObj, templatesBody);
        });
        // create button
        function createTemplate(templateObj, parent) {
            // create main button
            const newButton = document.createElement('div');
            parent.appendChild(newButton);
            const newButtonTitle = document.createElement('p');
            newButtonTitle.classList.add('lica-btn__title');
            newButtonTitle.innerText = templateObj.title;
            newButton.appendChild(newButtonTitle);
            newButton.id = templateObj.id;
            newButton.classList.add('lica-btn');
            //open modal for templates
            createEditBtnTemplate(templateObj, newButton);
            function createEditBtnTemplate(templateObj, parent) {
                const editBtn = document.createElement('button');
                editBtn.classList.add('lica-btn__edit');
                parent.appendChild(editBtn);
                editBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const modal = document.createElement('div');
                    modal.id = templateObj.id;
                    modal.classList.add('modalTemplate');
                    licaWrapper.appendChild(modal);
                    modal.innerHTML = `
                    <div class='modalTemplate'>
                        <div class='modalContent'>
                            <div class='modalNav'>
                                <input class='modalTemplateName'>
                                <button class='modalSave'>Save</button>
                                <button class='modalCancel'>Cancel</button>
                            </div>
                                
                            <div class='modalBody'>
                                <textarea class='modalText' cols="50" rows="20"></textarea> 
                            </div>
                        </div>
                    </div>
                    `;
                    //modal variables
                    const modalTemplateName = document.querySelector('.modalTemplateName');
                    const modalSave = document.querySelector('.modalSave');
                    const modalCancel = document.querySelector('.modalCancel');
                    const modalText = document.querySelector('.modalText');
                    // cancel button
                    modalCancel.addEventListener('click', () => {
                        modal.remove();
                    });
                    // save button
                    modalSave.addEventListener('click', (e) => {
                        e.stopPropagation();
                        templateObj.title = modalTemplateName.value;
                        templateObj.text = modalText.value;
                        newButtonTitle.innerText = modalTemplateName.value;
                        console.log(templateObj);
                        localStorage.setItem('langs', JSON.stringify(buttonsArray));
                        console.log(buttonsArray);
                        modalTemplateName.value = 'Saved!';
                        modalText.value = 'Saved!';
                        setTimeout(() => {
                            modalTemplateName.value = templateObj.title;
                            modalText.value = templateObj.text;
                        }, 600);
                    });
                    // render saved template name/text on open of modal
                    buttonsArray.forEach((item) => {
                        item.categories.forEach((category) => {
                            category.templates.forEach((template) => {
                                if (template.id === modal.id) {
                                    modalTemplateName.value = templateObj.title;
                                    modalText.value = templateObj.text;
                                }
                            });
                        });
                    });
                });
            }
            // create delete btn
            createDeleteBtnCategories(newButton);
            function createDeleteBtnCategories(parent) {
                const deleteBtn = document.createElement('button');
                deleteBtn.classList.add('lica-btn__delete');
                parent.appendChild(deleteBtn);
                deleteBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    // change buttons to accept and cancel
                    buttonsChange(newButton);
                    function buttonsChange(parent) {
                        const btnEdit = parent.querySelector('.lica-btn__edit');
                        const btnDelete = parent.querySelector('.lica-btn__delete');
                        const acceptBtn = document.createElement('button');
                        acceptBtn.classList.add('lica-btn__accept');
                        btnEdit.replaceWith(acceptBtn);
                        const cancelBtn = document.createElement('button');
                        cancelBtn.classList.add('lica-btn__cancel');
                        btnDelete.replaceWith(cancelBtn);
                        //accept
                        acceptBtn.addEventListener('click', (e) => {
                            e.stopPropagation();
                            const parent = e.currentTarget;
                            // loop over languages. item = langauge
                            buttonsArray.forEach((item) => {
                                // loop over categoris. category = category
                                item.categories.forEach((category) => {
                                    // loop over templates. template = template
                                    category.templates.forEach((template, index) => {
                                        if (template.id === parent.parentElement.id) {
                                            category.templates.splice(index, 1);
                                            console.log(buttonsArray);
                                            parent.parentElement.remove();
                                            localStorage.setItem('langs', JSON.stringify(buttonsArray));
                                        }
                                    });
                                });
                            });
                        });
                        //cancel
                        cancelBtn.addEventListener('click', (e) => {
                            e.stopPropagation();
                            acceptBtn.replaceWith(btnEdit);
                            cancelBtn.replaceWith(btnDelete);
                        });
                    }
                });
            }
            // insert text in textarea when template is clicked;
            newButton.addEventListener('click', () => {
                textArea.value = templateObj.text;
            });
        }
        // render templates for categories - lvl 3
        renderTemplates(categoryObj, templatesBody);
        function renderTemplates(categoryObj, parent) {
            const category = buttonsArray
                .flatMap((item) => item.categories)
                .find((category) => category.id === categoryObj.id);
            if (category) {
                category.templates.forEach((template) => {
                    createTemplate(template, parent);
                });
            }
        }
    }
}
//insert template logic
// INSERT EMPTY TEMPLATE
// emptyTemplate.addEventListener('click', (e) => {
//     // regexp pattern
//     let brand = document.querySelector(
//       '#page-wrapper > div > div > section > div > main > div.thread-details > div > div:nth-child(2) > div > div:nth-child(2) > b'
//     ).nextElementSibling.innerHTML;
//     // let brand = 'Google';
//     let word = 'brand';
//     let pattern = new RegExp('\\*' + word + '\\*', 'g');
//     const openMail = document.querySelector(
//       '#page-wrapper > div > div > section > div > main > div.reply > p'
//     );
//     openMail.click();
//     async function openEditor() {
//       const sourceBtn = document.getElementById('cke_39');
//       sourceBtn.click();
//       await delay(100);
//       const textArea = document.querySelector(
//         '.cke_source.cke_reset.cke_enable_context_menu.cke_editable.cke_editable_themed.cke_contents_ltr'
//       );
//       textArea.value = mainTemplate;
//       textArea.value = textArea.value.replace(pattern, brand);
//       await delay(100);
//       sourceBtn.click();
//       console.log('Finished!');
//     }
//     function delay(ms) {
//       return new Promise((resolve) => setTimeout(resolve, ms));
//     }
//     openEditor();
//   });
// function insertTemplate(whereToInsert) {
//     let brand = document.querySelector(
//         '#page-wrapper > div > div > section > div > main > div.thread-details > div > div:nth-child(2) > div > div:nth-child(2) > b'
//       ).nextElementSibling.innerHTML;
//     let word = 'brand';
//     let pattern = new RegExp('\\*' + word + '\\*', 'g');
//     const openMail = document.querySelector(
//       '#page-wrapper > div > div > section > div > main > div.reply > p'
//     );
//     openMail.click();
//     async function openEditor() {
//         const sourceBtn = document.getElementById('cke_39');
//         sourceBtn.click();
//         await delay(100);
//         const textArea = document.querySelector(
//           '.cke_source.cke_reset.cke_enable_context_menu.cke_editable.cke_editable_themed.cke_contents_ltr'
//         );
//         textArea.value = mainTemplate;
//         textArea.value = textArea.value.replace(pattern, brand);
//         await delay(100);
//         sourceBtn.click();
//         console.log('Finished!');
//       }
//       function delay(ms) {
//         return new Promise((resolve) => setTimeout(resolve, ms));
//       }
//       openEditor();
// }
