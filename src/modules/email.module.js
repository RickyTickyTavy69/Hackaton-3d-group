import { Module } from '../core/module';

export class EmailModule extends Module{

    static createModal(){
        const modal = document.createElement('DIV');
        modal.classList.add('modalmailer');
        modal.innerHTML = `<div class="modal-overlay">
          <div class="modal-window">
            <div class="modal-header">
              <span class="modal-title">Введите данные для отправки</span>
              <span class="modal-close">&times;</span>
            </div>
            <div class="modal-body">
              <form class="sendForm" action="">
                <input class="emailInput" type="email" placeholder="enter email">
                <input class="messageInput" type="text" placeholder="enter the message text">
              </form>
            </div>
            <div class="modal-footer">
              <button class="dataSubmitBtn" type="submit">send</button>
            </div>
          </div>
        </div>`
        
        return modal;
    }

    static createMailer(email, message) {
        let mailer = document.createElement('DIV');
        mailer.className = "mailer-overlay"
        mailer.innerHTML = `
          <div class="mailer-window">
      
            <a class="sendButton" target="_blank" href="mailto:${email}?subject=New Letter&body=${message}">send it</a>
          </div>`;

        return mailer;

    }

    close(){
        modal.innerHTML = "";
    }

    trigger(){
        let modal = EmailModule.createModal();
        document.body.appendChild(modal);

        let emailInput = document.querySelector('.emailInput');
        let messageInput = document.querySelector('.messageInput');
        let dataSubmitBtn = document.querySelector('.dataSubmitBtn');
        

        dataSubmitBtn.addEventListener('click', () => {
            let email = emailInput.value;
            let message = messageInput.value;

            modal.innerHTML = '';

            let mailer = EmailModule.createMailer(email, message);

            modal.append(mailer);

            let sendButton = document.querySelector('.sendButton');

            sendButton.addEventListener('click', () => {
                modal.innerHTML = '';
            })

        })

        
    }




}