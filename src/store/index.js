import { createStore } from 'vuex'
import MessageInput from '../entities/messageInput';
import User from '../entities/user'
import Message from './../entities/message'

const store = createStore({
    state(){
        return{
            heightChatBottom: 0,
            messages: [],
            users: [
                new User({
                    id: 0,
                    name: 'TRT14',
                    profilePicture: require('@/assets/img/users/woman.png'),
                    possibleConversations: [
                        new Message({
                            id: 'm0',
                            message: 'Olá, tudo bem? Em que posso ajudar?',
                            next: 'm1'
                        }),
                        new Message({
                            id: 'm1',
                            message: `
                            <p class="mb-2"><b>1.</b> Informação sobre um processo Judicial?</p>
                            <p class="mb-2"><b>2.</b> Gostaria de falar diretamente com uma Vara do Trabalho?</p>
                            <p class="mb-2"><b>3.</b> Informações gerais e sobre como ajuizar uma nova ação sem advogado?</p>
                            <p class="mb-2"><b>4.</b> Problemas ou informações sobre o Sistema PJe?</p>
                            <p class="mb-2"><b>5.</b> Contatar Unidade Judicial de Apoio, Gabinete de Desembargador, ou Unidade Administrativa?</p>
                            <p class="mb-2"><b>6.</b> Acessar o Serviço de Informação ao Cidadão ou Ouvidoria</p>
                            <p class="mb-2"><b>7.</b> Não localizei a opção de interesse.</p>
                            `,
                            options: [
                                new Message({
                                    id: 'm1r1',
                                    message: '1',
                                    sended: true,
                                    next: 'm1.1'
                                }),
                                new Message({
                                    id: 'm1r2',
                                    message: '2',
                                    sended: true,
                                    next: 'm1.2'
                                }),
                                new Message({
                                    id: 'm1r3',
                                    message: '3',
                                    sended: true,
                                    next: 'm1.3'
                                }),
                                new Message({
                                    id: 'm1r4',
                                    message: '4',
                                    sended: true,
                                    next: 'm1.4'
                                }),
                                new Message({
                                    id: 'm1r5',
                                    message: '5',
                                    sended: true,
                                    next: 'm1.5'
                                }),
                                new Message({
                                    id: 'm1r6',
                                    message: '6',
                                    sended: true,
                                    next: 'm1.6'
                                }),
                                new Message({
                                    id: 'm1r7',
                                    message: '7',
                                    sended: true,
                                    next: 'm1.7'
                                })
                            ]
                        }),
                        new Message({
                            id: 'm1.1',
                            direction: 'vertical',
                            message: '<p>Sabe o número do processo para qual deseja informação?</p>',
                            options: [
                                new Message({
                                    id: 'm1.2r1',
                                    message: 'Sim e gostaria de visualizar as informações na página de consulta processual do TRT14',
                                    sended: true,
                                    goTo: 'https://consulta.trt14.jus.br/',
                                    next: 'goTo.default'
                                }),
                                new Message({
                                    id: 'm1.2r2',
                                    message: 'Sim, mas gostaria de falar com um atendente da atual Unidade responsável do processo',
                                    sended: true,
                                    goTo: 'https://meet.google.com/inc-jeav-msw',
                                    next: 'goTo.default'
                                }),
                                new Message({
                                    id: 'm1.2r3',
                                    message: 'Não',
                                    sended: true,
                                    next: 'm1.2.3'
                                }),
                                new Message({
                                    id: 'm1.2r4',
                                    message: 'Voltar ao menu principal',
                                    sended: true,
                                    next: 'm1'
                                })
                            ]
                        }),
                        new Message({
                            id: 'm1.2.3',
                            message: 'Sabe em qual vara ou cidade o processo tramita?',
                            direction: 'vertical',
                            options: [
                                new Message({
                                    id: 'm1.2.3r1',
                                    message: 'Sim',
                                    sended: true,
                                    next: 'mf1'
                                }),
                                new Message({
                                    id: 'm1.2.3r2',
                                    message: 'Não sei. Solicitar atendimento virtual',
                                    sended: true,
                                    goTo: 'https://portal.trt14.jus.br/portal/atendimento-virtual/atermacao-online',
                                    next: 'goTo.default'
                                }),
                                new Message({
                                    id: 'm1.2.3r3',
                                    message: 'Voltar ao menu anterior',
                                    sended: true,
                                    next: 'm1.1'
                                })
                            ]
                        }),
                        new Message({
                            id: 'm1.2',
                            message: 'Para qual Vara do Trabalho gostaria de atendimento?',
                            acceptInput: new MessageInput({
                                has: true,
                                placeholder: 'Informe o número do processo',
                                processMask: true
                            })
                        }),
                        new Message({
                            id: 'm1.3',
                            message: `
                                <p>
                                    Atendimento Virtual - NAAV</br>
                                    <ul>
                                        <li><a href="https://portal.trt14.jus.br/portal/atendimento-virtual/atermacao-online" target="_blank">Formulário de contato</a></li>
                                        <li><a href="https://meet.google.com/inc-jeav-msw" target="_blank">Atendimento online (MEET)</a></li>
                                        <li>Email: <a href="mailto:atendimento@trt14.jus.br" target="_blank">atendimento@trt14.jus.br</a></li>
                                        <li>Telefones
                                            <ul>
                                                <li>Rondônia
                                                    <ol>
                                                        <li><a href="https://wa.me/69999622907" target="_blank"><b>WhatsApp</b> – (69) 99962-2907</a></li>
                                                        <li><b>Telefone fixo</b> - (69) 3218-6342</li>
                                                    </ol>
                                                </li>
                                                <li>Acre
                                                    <ol>
                                                        <li><a href="https://wa.me/68999147360" target="_blank"><b>WhatsApp</b> – (68) 99914-7360</a></li>
                                                        <li><b>Telefone fixo</b> - (68) 3216-5603</li>
                                                    </ol>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </p>
                            `,
                            options: [
                                new Message({
                                    id: 'm1.3r1',
                                    message: 'Voltar ao menu principal',
                                    sended: true,
                                    next: 'm1'
                                }),
                            ]
                        }),
                        new Message({
                            id: 'm1.4',
                            message: `
                                <p>
                                    Contatos com o NPJe
                                    <ul>
                                        <li><a href="https://portal.trt14.jus.br/portal/pje/formulario-suporte">Formulário de atendimento</a></li>
                                        <li><a href="https://meet.google.com/pso-utpr-tqm" target="_blank">Balcão de atendimento - SACLE</a></li>
                                        <li>Telefone da SACLE - <a href="tel:+556932186378">(69) 3218-6378</a></li>
                                    </ul>
                                </p>
                            `,
                            options: [
                                new Message({
                                    id: 'm1.3r1',
                                    message: 'Voltar ao menu principal',
                                    sended: true,
                                    next: 'm1'
                                }),
                            ]
                        }),
                        new Message({
                            id: 'm1.5',
                            message: `
                                <p class="mb-2">Para qual unidade deseja atendimento?</p>
                                <p class="mb-2"><b>1.</b> Gabinete de Desembargador do Trabalho</p>
                                <p class="mb-2"><b>2.</b> Unidade de Apoio Judiciário de 1º Grau</p>
                                <p class="mb-2"><b>3.</b> Unidade de Apoio Judiciário de 2º Grau</p>
                                <p class="mb-2"><b>4.</b> Unidade Administrativa</p>                            
                                <p class="mb-2"><b>5.</b> Voltar ao menu principal</p>                            
                            `,
                            options: [
                                new Message({
                                    id: 'm1.5r1',
                                    message: '1',
                                    sended: true,
                                    goTo: 'https://portal.trt14.jus.br/portal/balcao-virtual/unidades/521',
                                    next: 'goTo.default'
                                }),
                                new Message({
                                    id: 'm1.5r2',
                                    message: '2',
                                    sended: true,
                                    goTo: 'https://portal.trt14.jus.br/portal/balcao-virtual/unidades/519',
                                    next: 'goTo.default'
                                }),
                                new Message({
                                    id: 'm1.5r3',
                                    message: '3',
                                    sended: true,
                                    goTo: 'https://portal.trt14.jus.br/portal/balcao-virtual/unidades/523',
                                    next: 'goTo.default'
                                }),
                                new Message({
                                    id: 'm1.5r4',
                                    message: '4',
                                    sended: true,
                                    goTo: 'https://portal.trt14.jus.br/portal/balcao-virtual/unidades/525',
                                    next: 'goTo.default'
                                }),
                                new Message({
                                    id: 'm1.5r5',
                                    message: '5',
                                    sended: true,
                                    next: 'm1'
                                }),
                            ]
                        }),
                        new Message({
                            id: 'm1.6',
                            direction: 'vertical',
                            message: `Qual serviço você deseja?`,
                            options: [
                                new Message({
                                    id: 'm1.6r1',
                                    message: 'Obter contatos da ouvidoria',
                                    sended: true,
                                    next: 'm1.6.1'
                                }),
                                new Message({
                                    id: 'm1.6r2',
                                    message: 'Acessar a carta de serviços ao cidadão',
                                    sended: true,
                                    goTo: 'https://portal.trt14.jus.br/portal/carta-servico-cidadao/364',
                                    next: 'goTo.default'
                                }),
                                new Message({
                                    id: 'm1.6r3',
                                    message: 'Voltar ao menu principal',
                                    sended: true,
                                    next: 'm1'
                                })
                            ]
                        }),
                        new Message({
                            id: 'm1.6.1',
                            message: `
                                Contatos da ouvidoria
                                <ul>
                                    <li><a href="https://portal.trt14.jus.br/portal/ouvidoria/formulario-manifestacao" target="_blank">Formulário eletrônico</a></li>
                                    <li><b>Telefone Ouvidoria/SIC</b>: <a href="tel:+556932186369">(69) 3218-6369</a></li>
                                    <li><a href="https://wa.me/556932186369" target="_blank">Whatsapp (69) 32186369</a></li>
                                    <li><b>Horário de atendimento</b>: De segunda a sexta-feira das 7h30 às 14h30</li>
                                    <li><b>E-mail</b>: <a href="mailto:ouvidoria@trt14.jus.br" title="Clique para enviar e-mail">ouvidoria@trt14.jus.br</a></li>
                                    <li><b>Endereço presencial e postal</b>: Prédio-sede do Tribunal. Av. Almirante Barroso, no 600, Centro, Porto Velho (RO) - CEP: 76.801-901</li>
                                </ul>
                            `,
                            options: [
                                new Message({
                                    id: 'm1.6.1r1',
                                    message: 'Voltar ao menu principal',
                                    sended: true,
                                    next: 'm1'
                                })
                            ]
                        }),
                        new Message({
                            id: 'm1.7',
                            message: `Gostaria de ser direcionado para atendimento virtual?`,
                            direction: 'vertical',
                            options: [
                                new Message({
                                    id: 'm1.7r1',
                                    message: 'Sim',
                                    sended: true,
                                    goTo: 'https://meet.google.com/inc-jeav-msw',
                                    next: 'goTo.default'
                                }),
                                new Message({
                                    id: 'm1.7r2',
                                    message: 'Não, voltar ao menu principal',
                                    sended: true,
                                    next: 'm1'
                                })
                            ]
                        }),
                        new Message({
                            id: 'goTo.default',
                            message: 'Você está sendo redirecionado.',
                            options: [
                                new Message({
                                    id: 'goTo.default.r',
                                    message: 'Voltar ao menu principal',
                                    sended: true,
                                    next: 'm1'
                                })
                            ]
                        })
                    ]
                })
            ]
        }
    },
    getters:{
        getUser(state){
            return (userId) => {
                return state.users.find((user) => user.id == userId)
            }
        },
        users(state){
            return (hasStartedConversation) => {
                return state.users.filter((user) => {
                    return hasStartedConversation ? user.isConversationStarted() : user
                })
            }
        }
    }
});

export default store