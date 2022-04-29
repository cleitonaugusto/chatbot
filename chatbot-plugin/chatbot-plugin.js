const portalBody = document.querySelector('body')
const portalDivIframe = document.createElement("div")
const portalIframe = document.createElement("iframe")
const chatBotMessage = document.createElement("div")
const chatbotCall = document.createElement("div")
const chatbotMessageClose = document.createElement("div")
const positionSetter = document.createElement("div")
let position = 'right'
const chatbotState = {
    isShow: false,
    menu: false,
    iframeSrc: "https://appserver1.trt14.jus.br/hml-chatbot/",
    personPic: "https://appserver1.trt14.jus.br/hml-chatbot/img/raira.d2ceab22.jpg",
    messages: [
        {id:1, message: 'Olá, sou a Raíra, assistente virtual do TRT14. Em que posso ajudar?'},
        {id:2, message: 'Vou continuar por aqui, caso precise!'}
    ],
    countClick: 0
}

async function chatbot(){
    portalDivIframe.classList.add('chatbot-div-iframe')
    portalDivIframe.classList.add('initial-position')
    positionSetter.classList.add('position-setter')
    portalIframe.classList.add('chatbot-iframe')
    portalIframe.src = chatbotState.iframeSrc        
    chatBotMessage.classList.add('chatbot-msg')
    chatBotMessage.classList.add('initial-position')
    chatBotMessage.innerHTML = chatbotState.messages[0].message
    startPositionSetter()            
    
    chatbotCall.classList.add('chatbot-call')
    chatbotCall.classList.add('initial-position')
    chatbotCall.innerHTML = `<img src="${chatbotState.personPic}" class="person-pic">`
    chatbotCall.addEventListener('click', async () => {
        if(!chatbotState.isShow){
            portalDivIframe.append(portalIframe)
            portalDivIframe.append(positionSetter)
        }
        chatbotState.isShow = !chatbotState.isShow
        const classeAdd = chatbotState.isShow ? 'presentation-position' : 'initial-position'
        const classeRem = chatbotState.isShow ? 'initial-position' : 'presentation-position'
        portalDivIframe.classList.remove(classeRem)
        portalDivIframe.classList.add(classeAdd)
        chatBotMessage.classList.remove('presentation-position')
        setTimeout(() => {
            if(!chatbotState.isShow){
                chatBotMessage.innerHTML = chatbotState.messages[1].message
                chatBotMessage.classList.add('presentation-position')
                messageCloseMobile()
                setTimeout(() => {
                    chatBotMessage.classList.remove('presentation-position')                
                }, 5000 + 600);    
            }
        }, 600)

        chatbotState.countClick++
    })

    setPosition(position)

    messageCloseMobile()
    
    portalBody.append(chatbotCall)
    portalBody.append(chatBotMessage)
    portalBody.append(portalDivIframe)
    
    setTimeout(() => {
        chatBotMessage.classList.add('presentation-position')
    }, 1000)
}

function startPositionSetter(){
    positionSetter.addEventListener('click', () => {
        let _open = chatbotState.menu
        chatbotState.menu = !chatbotState.menu
        hamburguerMenu(_open)
    })
    hamburguerMenu()
}

function hamburguerMenu(open){
    let _li = ''
    if(position === 'left'){
        _li = '<li><span onclick="setPosition(\'right\')">Reposicionar o chat para a direita</span></li>'
    }else{
        _li = '<li><span onclick="setPosition(\'left\')">Reposicionar o chat para a esquerda</span></li>'
    }
    positionSetter.innerHTML = `
        <div>
            <div class="menu-icon"></div>
            <ul class="menu ${open ? 'chatbot-d-show' : 'chatbot-d-none'}">
                ${_li}
            </ul>
        </div>
    `

}

function setPosition(newPosition = 'left'){
    position = newPosition

    portalDivIframe.classList.remove('left')
    portalDivIframe.classList.remove('right')
    chatBotMessage.classList.remove('left')
    chatBotMessage.classList.remove('right')
    chatbotCall.classList.remove('left')
    chatbotCall.classList.remove('right')

    portalDivIframe.classList.add(position)
    chatBotMessage.classList.add(position)
    chatbotCall.classList.add(position)

    hamburguerMenu()
}

function messageCloseMobile(){
    if(screen.width <= 480) {
        chatbotMessageClose.id = 'chatbot-msg-close'
        chatbotMessageClose.innerHTML = 'x'
        chatBotMessage.append(chatbotMessageClose)
        chatbotMessageClose.addEventListener('click', callOpacity)        
        chatbotMessageClose.addEventListener('click', callOpacity)        
    }
}

const callOpacity = () => {
        fadeOutEffect(chatBotMessage)
        chatbotCall.classList.add('chatbot-call-opacity')
        portalDivIframe.classList.add('chatbot-call-opacity-active')
        setTimeout(() => {
            chatBotMessage.classList.add('chatbot-d-none')
            chatbotMessageClose.classList.add('chatbot-d-none')
        }, 500)
}

const fadeOutEffect = (fadeTarget) => {
    const fadeEffect = setInterval(() => {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1
        } else {
            clearInterval(fadeEffect)
        }
    }, 10)
}

chatbot()