// file:///F:/coding/web%20development/javascript/Message%20App/index.html

const { hash } = window.location;
const Message = atob(hash.replace('#',''))

if(Message){
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide')
    document.querySelector('h1').innerHTML = Message
}

document.querySelector('form').addEventListener('submit', event => {

    event.preventDefault()

    document.querySelector('#message-form').classList.add('hide')
    document.querySelector('#link-form').classList.remove('hide')

    const input = document.querySelector('#message-input')
    const encryptedMessage = btoa(input.value)
    const link = document.querySelector('#link-input')

    link.value = `${window.location}#${encryptedMessage}`
    link.select()
})