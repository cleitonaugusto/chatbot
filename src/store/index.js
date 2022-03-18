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
                    name: 'Raíra',
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
                                    next: 'm.pi.1'
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
                                    next: 'm1.2'
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
                            input: new MessageInput({
                                has: true,
                                placeholder: 'Informe o número do processo',
                                select: true,
                                options: [
                                    {id: '1', descricao: '1ª VARA DO TRABALHO DE PORTO VELHO - RO', next: 'm1.2.1'},
                                    {id: '2', descricao: '2ª VARA DO TRABALHO DE PORTO VELHO - RO', next: 'm1.2.2'},
                                    {id: '3', descricao: '3ª VARA DO TRABALHO DE PORTO VELHO - RO', next: 'm1.2.3'},
                                    {id: '4', descricao: '4ª VARA DO TRABALHO DE PORTO VELHO - RO', next: 'm1.2.4'},
                                    {id: '5', descricao: '5ª VARA DO TRABALHO DE PORTO VELHO - RO', next: 'm1.2.5'},
                                    {id: '6', descricao: '6ª VARA DO TRABALHO DE PORTO VELHO - RO', next: 'm1.2.6'},
                                    {id: '7', descricao: '7ª VARA DO TRABALHO DE PORTO VELHO - RO', next: 'm1.2.7'},
                                    {id: '8', descricao: '8ª VARA DO TRABALHO DE PORTO VELHO - RO', next: 'm1.2.8'},
                                    {id: '31', descricao: '1ª VARA DO TRABALHO DE ARIQUEMES - RO', next: 'm1.2.31'},
                                    {id: '32', descricao: '2ª VARA DO TRABALHO DE ARIQUEMES - RO', next: 'm1.2.32'},
                                    {id: '41', descricao: 'VARA DO TRABALHO DE CACOAL - RO', next: 'm1.2.41'},
                                    {id: '51', descricao: 'VARA DO TRABALHO DE COLORADO DO OESTE - RO', next: 'm1.2.51'},
                                    {id: '61', descricao: 'VARA DO TRABALHO DE SÃO MIGUEL DO GUAPORÉ - RO', next: 'm1.2.61'},
                                    {id: '71', descricao: 'VARA DO TRABALHO DE GUAJARÁ MIRIM - RO', next: 'm1.2.71'},
                                    {id: '81', descricao: 'VARA DO TRABALHO DE JARU - RO', next: 'm1.2.81'},
                                    {id: '91', descricao: '1ª VARA DO TRABALHO DE JI-PARANÁ - RO', next: 'm1.2.91'},
                                    {id: '92', descricao: '2ª VARA DO TRABALHO DE JI-PARANÁ - RO', next: 'm1.2.92'},
                                    {id: '101', descricao: 'VARA DO TRABALHO DE OURO PRETO DO OESTE - RO', next: 'm1.2.101'},
                                    {id: '111', descricao: 'VARA DO TRABALHO DE PIMENTA BUENO - RO', next: 'm1.2.111'},
                                    {id: '131', descricao: 'VARA DO TRABALHO DE ROLIM DE MOURA - RO', next: 'm1.2.131'},
                                    {id: '141', descricao: 'VARA DO TRABALHO DE VILHENA - RO', next: 'm1.2.141'},
                                    {id: '151', descricao: 'VARA DO TRABALHO DE BURITIS - RO', next: 'm1.2.151'},
                                    {id: '161', descricao: 'VARA DO TRABALHO DE MACHADINHO DO OESTE - RO', next: 'm1.2.161'},
                                    {id: '401', descricao: '1ª VARA DO TRABALHO DE RIO BRANCO - AC', next: 'm1.2.401'},
                                    {id: '402', descricao: '2ª VARA DO TRABALHO DE RIO BRANCO - AC', next: 'm1.2.402'},
                                    {id: '403', descricao: '3ª VARA DO TRABALHO DE RIO BRANCO - AC', next: 'm1.2.403'},
                                    {id: '404', descricao: '4ª VARA DO TRABALHO DE RIO BRANCO - AC', next: 'm1.2.404'},
                                    {id: '411', descricao: 'VARA DO TRABALHO DE EPITACIOLÂNDIA - AC', next: 'm1.2.411'},
                                    {id: '416', descricao: 'VARA DO TRABALHO DE CRUZEIRO DO SUL - AC', next: 'm1.2.416'},
                                    {id: '421', descricao: 'VARA DO TRABALHO DE FEIJÓ - AC', next: 'm1.2.421'},
                                    {id: '425', descricao: 'VARA DO TRABALHO DE PLÁCIDO DE CASTRO - AC', next: 'm1.2.425'},
                                    {id: '426', descricao: 'VARA DO TRABALHO DE SENA MADUREIRA - AC', next: 'm1.2.426'}
                                ]
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
                                        <li><a href="https://portal.trt14.jus.br/portal/pje/formulario-suporte" target="_blank">Formulário de atendimento</a></li>
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
                                    <li><b>Horário de atendimento</b>: Segunda a sexta, das 7:30 às 14:30 em seu horário local.</li>
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
                        }),
                        new Message({
                            id: 'm1.2.1',
                            message: `
                                Dados de contato da 1ª Vara do Trabalho de Porto Velho
                                <ul>
                                    <li><a href="https://meet.google.com/iaz-zipc-ify" target="_blank">Balcão Virtual (MEET)</a></li>
                                    <li><b>Email</b>: <a href="mailto:vtpvh1@trt14.jus.br">vtpvh1@trt14.jus.br</a></li>
                                    <li><b>Telefone</b>: <a href="tel:(69) 3218-6348" title="Ligar">(69) 3218-6348</a></li>
                                    <li><b>Whatsapp</b>: <a href="https://wa.me/556932186348" title="entrar em contato pelo whatsapp" target="_blank">Whatsapp</a></li>
                                    <li><b>Horário de atendimento</b>: Segunda a sexta, das 7:30 às 14:30 em seu horário local.</li>
                                    <li><b>Endereço</b>: Rua Prudente de Morais, N° 2313, Mocambo, Porto Velho - RO, CEP: 76801-039</li>
                                </ul>
                            `,
                            options: [
                                new Message({
                                    id: 'm1.2.1r1',
                                    message: 'Voltar ao menu principal',
                                    sended: true,
                                    next: 'm1'
                                })
                            ]
                        }),
                        new Message({
                            id: 'm1.2.2',
                            message: `
                                Dados de contato da 2ª Vara do Trabalho de Porto Velho
                                <ul>
                                    <li><a href="https://meet.google.com/mka-ptma-hjf" target="_blank">Balcão Virtual (MEET)</a></li>
                                    <li><b>Email</b>: <a href="mailto:vtpvh2@trt14.jus.br">vtpvh2@trt14.jus.br</a></li>
                                    <li><b>Telefone</b>: <a href="tel:(69) 3218-6358" title="Ligar">(69) 3218-6358</a></li>
                                    <li><b>Horário de atendimento</b>: Segunda a sexta, das 7:30 às 14:30 em seu horário local.</li>
                                    <li><b>Endereço</b>: Rua Prudente de Morais, N° 2313, Mocambo, Porto Velho - RO, CEP: 76801-039</li>
                                </ul>
                            `,
                            options: [
                                new Message({
                                    id: 'm1.2.2r1',
                                    message: 'Voltar ao menu principal',
                                    sended: true,
                                    next: 'm1'
                                })
                            ]
                        }),
                        new Message({
                            id: 'm1.2.3',
                            message: `
                                Dados de contato da 3ª Vara do Trabalho de Porto Velho
                                <ul>
                                    <li><a href="https://meet.google.com/azf-dora-ujo" target="_blank">Balcão Virtual (MEET)</a></li>
                                    <li><b>Email</b>: <a href="mailto:vtpvh3@trt14.jus.br">vtpvh3@trt14.jus.br</a></li>
                                    <li><b>Telefone</b>: <a href="tel:(69) 3218-6379" title="Ligar">(69) 3218-6379</a></li>
                                    <li><b>Telefone</b>: <a href="tel:(69) 3218-6376" title="Ligar">(69) 3218-6376</a></li>
                                    <li><b>Whatsapp</b>: <a href="https://wa.me/556932186376" title="entrar em contato pelo whatsapp" target="_blank">Whatsapp</a></li>
                                    <li><b>Horário de atendimento</b>: Segunda a sexta, das 7:30 às 14:30 em seu horário local.</li>
                                    <li><b>Endereço</b>: Rua Prudente de Morais, N° 2313, Mocambo, Porto Velho - RO, CEP: 76801-039</li>
                                </ul>
                            `,
                            options: [
                                new Message({
                                    id: 'm1.2.3r1',
                                    message: 'Voltar ao menu principal',
                                    sended: true,
                                    next: 'm1'
                                })
                            ]
                        }),
                        new Message({
                            id: 'm1.2.4',
                            message: `
                                Dados de contato da 4ª Vara do Trabalho de Porto Velho
                                <ul>
                                    <li><a href="https://meet.google.com/qag-djpa-zvu" target="_blank">Balcão Virtual (MEET)</a></li>
                                    <li><b>Email</b>: <a href="mailto:vtpvh4@trt14.jus.br">vtpvh4@trt14.jus.br</a></li>
                                    <li><b>Telefone</b>: <a href="tel:(69) 3218-6387" title="Ligar">(69) 3218-6387</a></li>
                                    <li><b>Horário de atendimento</b>: Segunda a sexta, das 7:30 às 14:30 em seu horário local.</li>
                                    <li><b>Endereço</b>: Rua Prudente de Morais, N° 2313, Mocambo, Porto Velho - RO, CEP: 76801-039</li>
                                </ul>
                            `,
                            options: [
                                new Message({
                                    id: 'm1.2.4r1',
                                    message: 'Voltar ao menu principal',
                                    sended: true,
                                    next: 'm1'
                                })
                            ]
                        }),
                        new Message({
                            id: 'm1.2.5',
                            message: `
                                DADOS DE CONTATO DA 5ª VARA DO TRABALHO DE PORTO VELHO - RO
                                <ul>
                                    <li><a href="https://meet.google.com/nxu-dkas-zcf" target="_blank">Balcão Virtual (MEET)</a>
                                    </li><li><b>Email</b>: <a href="mailto:vtpvh5@trt14.jus.br">vtpvh5@trt14.jus.br</a></li>
                                    <li><b>Telefone</b>: <a href="tel:(69) 3218-6415" title="Ligar">(69) 3218-6415</a></li>
                                    <li><b>Horário de atendimento</b>: Segunda a sexta, das 7:30 às 14:30 em seu horário local.</li>
                                    <li><b>Endereço</b>: Rua Prudente de Morais, N° 2313, Mocambo, Porto Velho - RO, CEP: 76801-039</li>
                                </ul>
                            `,
                            options: [
                                new Message({
                                    id: 'm1.2.5r1',
                                    message: 'Voltar ao menu principal',
                                    sended: true,
                                    next: 'm1'
                                })
                            ]
                        }),
                        new Message({
                            id: 'm1.2.6',
                            message: `
                                DADOS DE CONTATO DA 6ª VARA DO TRABALHO DE PORTO VELHO - RO
                                <ul>
                                    <li><a href="https://meet.google.com/zne-cvve-ouo" target="_blank">Balcão Virtual (MEET)</a></li>
                                    <li><b>Email</b>: <a href="mailto:vtpvh6@trt14.jus.br">vtpvh6@trt14.jus.br</a></li>
                                    <li><b>Telefone</b>: <a href="tel:(69) 3211-6657" title="Ligar">(69) 3211-6657</a></li>
                                    <li><b>Horário de atendimento</b>: Segunda a sexta, das 7:30 às 14:30 em seu horário local.</li>
                                    <li><b>Endereço</b>: Rua Prudente de Morais, N° 2313, Mocambo, Porto Velho - RO, CEP: 76801-039</li>
                                </ul>
                            `,
                            options: [
                                new Message({
                                    id: 'm1.2.6r1',
                                    message: 'Voltar ao menu principal',
                                    sended: true,
                                    next: 'm1'
                                })
                            ]
                        }),
                        new Message({
                            id: 'm1.2.7',
                            message: `
                                DADOS DE CONTATO DA 7ª VARA DO TRABALHO DE PORTO VELHO - RO
                                <ul>
                                    <li><a href="https://meet.google.com/ckq-vjgc-gki" target="_blank">Balcão Virtual (MEET)</a></li>
                                    <li><b>Email</b>: <a href="mailto:vtpvh7@trt14.jus.br">vtpvh7@trt14.jus.br</a></li>
                                    <li><b>Telefone</b>: <a href="tel:(69) 3211-6304" title="Ligar">(69) 3211-6304</a></li>
                                    <li><b>Telefone</b>: <a href="tel:(69) 3211-6301" title="Ligar">(69) 3211-6301</a></li>
                                    <li><b>Horário de atendimento</b>: Segunda a sexta, das 7:30 às 14:30 em seu horário local.</li>
                                    <li><b>Endereço</b>: Rua Prudente de Morais, N° 2313, Mocambo, Porto Velho - RO, CEP: 76801-039</li>
                                </ul>
                            `,
                            options: [
                                new Message({
                                    id: 'm1.2.7r1',
                                    message: 'Voltar ao menu principal',
                                    sended: true,
                                    next: 'm1'
                                })
                            ]
                        }),
                        new Message({
                            id: 'm1.2.8',
                            message: `
                                DADOS DE CONTATO DA 8ª VARA DO TRABALHO DE PORTO VELHO - RO
                                <ul>
                                    <li><a href="https://meet.google.com/evi-skth-dsb" target="_blank">Balcão Virtual (MEET)</a></li>
                                    <li><b>Email</b>: <a href="mailto:vtpvh8@trt14.jus.br">vtpvh8@trt14.jus.br</a></li>
                                    <li><b>Telefone</b>: <a href="tel:(69) 3211-6307" title="Ligar">(69) 3211-6307</a></li>
                                    <li><b>Whatsapp</b>: <a href="https://wa.me/556932116307" title="Entrar em contato pelo whatsapp" target="_blank">Whatsapp</a></li>
                                    <li><b>Horário de atendimento</b>: Segunda a sexta, das 7:30 às 14:30 em seu horário local.</li>
                                    <li><b>Endereço</b>: Rua Prudente de Morais, N° 2313, Mocambo, Porto Velho - RO, CEP: 76801-039</li>
                                </ul>
                            `,
                            options: [
                                new Message({
                                    id: 'm1.2.8r1',
                                    message: 'Voltar ao menu principal',
                                    sended: true,
                                    next: 'm1'
                                })
                            ]
                        }),
                        new Message({
                            id: 'm1.2.31',
                            message: `
                                DADOS DE CONTATO DA 1ª VARA DO TRABALHO DE ARIQUEMES - RO
                                <ul>
                                    <li><a href="https://meet.google.com/xij-rhmw-rzh" target="_blank">Balcão Virtual (MEET)</a></li>
                                    <li><b>Email</b>: <a href="mailto:vtariquemes1@trt14.jus.br">vtariquemes1@trt14.jus.br</a></li>
                                    <li><b>Telefone</b>: <a href="tel:(69) 3516-2306" title="Ligar">(69) 3516-2306</a></li>
                                    <li><b>Whatsapp</b>: <a href="https://wa.me/556935162306" title="Entrar em contato pelo whatsapp" target="_blank">Whatsapp</a></li>
                                    <li><b>Horário de atendimento</b>: Segunda a sexta, das 7:30 às 14:30 em seu horário local.</li>
                                    <li><b>Endereço</b>: Av. Juscelino Kubitschek, Setor Industrial, Ariquemes - RO, CEP: 76872-853</li>
                                </ul>'
                            `,
                            options: [
                                new Message({
                                    id: 'm1.2.31r1',
                                    message: 'Voltar ao menu principal',
                                    sended: true,
                                    next: 'm1'
                                })
                            ]
                        }),
                        new Message({
                            id: 'm1.2.32',
                            message: `
                                DADOS DE CONTATO DA 2ª VARA DO TRABALHO DE ARIQUEMES - RO
                                <ul>
                                    <li><a href="https://meet.google.com/eyo-jbfe-twq" target="_blank">Balcão Virtual (MEET)</a></li>
                                    <li><b>Email</b>: <a href="mailto:vtariquemes2@trt14.jus.br">vtariquemes2@trt14.jus.br</a></li>
                                    <li><b>Telefone</b>: <a href="tel:(69) 3516-2301" title="Ligar">(69) 3516-2301</a></li>
                                    <li><b>Telefone</b>: <a href="tel:(69) 99257-3233" title="Ligar">(69) 99257-3233</a></li>
                                    <li><b>Whatsapp</b>: <a href="https://wa.me/5569992573233" title="Entrar em contato pelo whatsapp" target="_blank">Whatsapp</a></li>
                                    <li><b>Horário de atendimento</b>: Segunda a sexta, das 7:30 às 14:30 em seu horário local.</li>
                                    <li><b>Endereço</b>: Av. Juscelino Kubitschek, Setor Industrial, Ariquemes - RO, CEP: 76872-853</li>
                                </ul>
                            `,
                            options: [
                                new Message({
                                    id: 'm1.2.32r1',
                                    message: 'Voltar ao menu principal',
                                    sended: true,
                                    next: 'm1'
                                })
                            ]
                        }),
                        new Message({
                            id: 'm1.2.41',
                            message: `
                                DADOS DE CONTATO DA VARA DO TRABALHO DE CACOAL - RO
                                <ul>
                                    <li><a href="https://meet.google.com/mdh-zjvm-fnk" target="_blank">Balcão Virtual (MEET)</a></li>
                                    <li><b>Email</b>: <a href="mailto:vtcacoal@trt14.jus.br">vtcacoal@trt14.jus.br</a></li>
                                    <li><b>Telefone</b>: <a href="tel:(69) 99975-3104" title="Ligar">(69) 99975-3104</a></li>
                                    <li><b>Whatsapp</b>: <a href="https://wa.me/5569999753104" title="Entrar em contato pelo whatsapp" target="_blank">Whatsapp</a></li>
                                    <li><b>Horário de atendimento</b>: Segunda a sexta, das 7:30 às 14:30 em seu horário local.</li>
                                    <li><b>Endereço</b>: Rua General Osório, N° 427, Princesa Isabel, Cacoal - RO, CEP: 76964-030</li>
                                </ul>                            
                            `,
                            options: [
                                new Message({
                                    id: 'm1.2.41r1',
                                    message: 'Voltar ao menu principal',
                                    sended: true,
                                    next: 'm1'
                                })
                            ]
                        }),
                        new Message({
                            id: 'm1.2.51',
                            message: `
                                DADOS DE CONTATO DA VARA DO TRABALHO DE COLORADO DO OESTE - RO
                                <ul>
                                    <li><a href="https://meet.google.com/odg-ubyv-ksw?authuser=0" target="_blank">Balcão Virtual (MEET)</a></li>
                                    <li><b>Email</b>: <a href="mailto:vtcolorado@trt14.jus.br">vtcolorado@trt14.jus.br</a></li>
                                    <li><b>Telefone</b>: <a href="tel:(69) 3341-2582" title="Ligar">(69) 3341-2582</a></li>
                                    <li><b>Telefone</b>: <a href="tel:(69) 99975-3119" title="Ligar">(69) 99975-3119</a></li>
                                    <li><b>Whatsapp</b>: <a href="https://wa.me/556933412582" title="Entrar em contato pelo whatsapp" target="_blank">Whatsapp</a></li>
                                    <li><b>Horário de atendimento</b>: Segunda a sexta, das 7:30 às 14:30 em seu horário local.</li>
                                    <li><b>Endereço</b>: AV. Paulo de Assis Ribeiro, N° 4061, Centro, Colorado do Oeste - RO, CEP: 76993-000</li>
                                </ul>
                            `,
                            options: [
                                new Message({
                                    id: 'm1.2.51r1',
                                    message: 'Voltar ao menu principal',
                                    sended: true,
                                    next: 'm1'
                                })
                            ]
                        }),
                        new Message({
                            id: 'm1.2.61',
                            message: `
                                DADOS DE CONTATO DA VARA DO TRABALHO DE SÃO MIGUEL DO GUAPORÉ - RO
                                <ul>
                                    <li><a href="https://meet.google.com/xtq-sduk-htj" target="_blank">Balcão Virtual (MEET)</a></li>
                                    <li><b>Email</b>: <a href="mailto:vtsaomiguel@trt14.jus.br">vtsaomiguel@trt14.jus.br</a></li>
                                    <li><b>Telefone</b>: <a href="tel:(69) 99975-3188" title="Ligar">(69) 99975-3188</a></li>
                                    <li><b>Telefone</b>: <a href="tel:(69) 3642-2115" title="Ligar">(69) 3642-2115</a></li>
                                    <li><b>Horário de atendimento</b>: Segunda a sexta, das 7:30 às 14:30 em seu horário local.</li>
                                    <li><b>Endereço</b>: Rua 16 De Junho, 1365, Cristo Rei, São Miguel do Guaporé - RO, CEP: 76932-000</li>
                                </ul>
                            `,
                            options: [
                                new Message({
                                    id: 'm1.2.61r1',
                                    message: 'Voltar ao menu principal',
                                    sended: true,
                                    next: 'm1'
                                })
                            ]
                        }),
                        new Message({
                            id: 'm1.2.71',
                            message: `
                                DADOS DE CONTATO DA VARA DO TRABALHO DE GUAJARÁ-MIRIM - RO
                                <ul>
                                    <li><a href="https://meet.google.com/xux-aziu-tvt" target="_blank">Balcão Virtual (MEET)</a></li>
                                    <li><b>Email</b>: <a href="mailto:vtguajara@trt14.jus.br">vtguajara@trt14.jus.br</a></li>
                                    <li><b>Telefone</b>: <a href="tel:(69) 99358 2626" title="Ligar">(69) 99358 2626</a></li>
                                    <li><b>Telefone</b>: <a href="tel:(69) 99975-3126" title="Ligar">(69) 99975-3126</a></li>
                                    <li><b>Telefone</b>: <a href="tel:(69) 98432 8699" title="Ligar">(69) 98432 8699</a></li>
                                    <li><b>Horário de atendimento</b>: Segunda a sexta, das 7:30 às 14:30 em seu horário local.</li>
                                    <li><b>Endereço</b>: AV. Novo Sertão, N° 1333, 10 de Abril, Guajará-Mirim - RO, CEP: 76850-000</li>
                                </ul>
                            `,
                            options: [
                                new Message({
                                    id: 'm1.2.71r1',
                                    message: 'Voltar ao menu principal',
                                    sended: true,
                                    next: 'm1'
                                })
                            ]
                        }),
                        new Message({
                            id: 'm1.2.81',
                            message: `
                                DADOS DE CONTATO DA VARA DO TRABALHO DE JARU - RO
                                <ul>
                                    <li><a href="https://meet.google.com/api-xaes-zya" target="_blank">Balcão Virtual (MEET)</a></li>
                                    <li><b>Email</b>: <a href="mailto:vtjaru@trt14.jus.br">vtjaru@trt14.jus.br</a></li>
                                    <li><b>Telefone</b>: <a href="tel:(69) 99975-3128" title="Ligar">(69) 99975-3128</a></li>
                                    <li><b>Whatsapp</b>: <a href="https://wa.me/5569999753128" title="Entrar em contato pelo whatsapp" target="_blank">Whatsapp</a></li>
                                    <li><b>Horário de atendimento</b>: Segunda a sexta, das 7:30 às 14:30 em seu horário local.</li>
                                    <li><b>Endereço</b>: Rua Raimundo Cantanhêde, N° 1113, Setor 02, Jaru - RO, CEP: 76890-000</li>
                                </ul>
                            `,
                            options: [
                                new Message({
                                    id: 'm1.2.81r1',
                                    message: 'Voltar ao menu principal',
                                    sended: true,
                                    next: 'm1'
                                })
                            ]
                        }),
                        new Message({
                            id: 'm1.2.91',
                            message: `
                                DADOS DE CONTATO DA 1ª VARA DO TRABALHO DE JI-PARANÁ - RO
                                <ul>
                                    <li><a href="https://meet.google.com/srp-gpsf-omk" target="_blank">Balcão Virtual (MEET)</a></li>
                                    <li><b>Email</b>: <a href="mailto:vtjipa@trt14.jus.br">vtjipa@trt14.jus.br</a></li>
                                    <li><b>Telefone</b>: <a href="tel:(69) 3416-8104" title="Ligar">(69) 3416-8104</a></li>
                                    <li><b>Horário de atendimento</b>: Segunda a sexta, das 7:30 às 14:30 em seu horário local.</li>
                                    <li><b>Endereço</b>: Rua Monte Castelo, 1295, Jardim dos Migrantes, Ji-Paraná - RO, CEP: 76900-735</li>
                                </ul>
                            `,
                            options: [
                                new Message({
                                    id: 'm1.2.91r1',
                                    message: 'Voltar ao menu principal',
                                    sended: true,
                                    next: 'm1'
                                })
                            ]
                        }),
                        new Message({
                            id: 'm1.2.92',
                            message: `
                                DADOS DE CONTATO DA 2ª VARA DO TRABALHO DE JI-PARANÁ - RO
                                <ul>
                                    <li><a href="https://meet.google.com/zoy-zyox-gef" target="_blank">Balcão Virtual (MEET)</a></li>
                                    <li><b>Email</b>: <a href="mailto:vtjipa2@trt14.jus.br">vtjipa2@trt14.jus.br</a></li>
                                    <li><b>Telefone</b>: <a href="tel:(69) 3416-8110" title="Ligar">(69) 3416-8110</a></li>
                                    <li><b>Whatsapp</b>: <a href="https://wa.me/556934168110" title="Entrar em contato pelo whatsapp" target="_blank">Whatsapp</a></li>
                                    <li><b>Horário de atendimento</b>: Segunda a sexta, das 7:30 às 14:30 em seu horário local.</li>
                                    <li><b>Endereço</b>: 	Rua Monte Castelo, 1295, Jardim dos Migrantes, Ji-Paraná - RO, CEP: 76900-735</li>
                                </ul>
                            `,
                            options: [
                                new Message({
                                    id: 'm1.2.92r1',
                                    message: 'Voltar ao menu principal',
                                    sended: true,
                                    next: 'm1'
                                })
                            ]
                        }),
                        new Message({
                            id: 'm1.2.101',
                            message: `
                                DADOS DE CONTATO DA VARA DO TRABALHO DE OURO PRETO DO OESTE - RO
                                <ul>
                                    <li><a href="https://meet.google.com/grb-irtf-usb" target="_blank">Balcão Virtual (MEET)</a></li>
                                    <li><b>Email</b>: <a href="mailto:vtouropreto@trt14.jus.br">vtouropreto@trt14.jus.br</a></li>
                                    <li><b>Telefone</b>: <a href="tel:(69) 3461-2655" title="Ligar">(69) 3461-2655</a></li>
                                    <li><b>Telefone</b>: <a href="tel:(69) 99975-3156" title="Ligar">(69) 99975-3156</a></li>
                                    <li><b>Horário de atendimento</b>: Segunda a sexta, das 7:30 às 14:30 em seu horário local.</li>
                                    <li><b>Endereço</b>: AV. 15 de Novembro, N° 1009, Uniaõ, Ouro Preto do Oeste - RO, CEP: 76920-000</li>
                                </ul>
                            `,
                            options: [
                                new Message({
                                    id: 'm1.2.101r1',
                                    message: 'Voltar ao menu principal',
                                    sended: true,
                                    next: 'm1'
                                })
                            ]
                        }),
                        new Message({
                            id: 'm1.2.111',
                            message: `
                                DADOS DE CONTATO DA VARA DO TRABALHO DE PIMENTA BUENO - RO
                                <ul>
                                    <li><a href="https://meet.google.com/for-ajna-uwp" target="_blank">Balcão Virtual (MEET)</a></li>
                                    <li><b>Email</b>: <a href="mailto:vtpbueno@trt14.jus.br">vtpbueno@trt14.jus.br</a></li>
                                    <li><b>Telefone</b>: <a href="tel:(69) 99975-3157" title="Ligar">(69) 99975-3157</a></li>
                                    <li><b>Horário de atendimento</b>: Segunda a sexta, das 7:30 às 14:30 em seu horário local.</li>
                                    <li><b>Endereço</b>: Rua Floriano Peixoto, 411, Centro, Pimenta Bueno - Ro, CEP: 76970-000</li>
                                </ul>
                            `,
                            options: [
                                new Message({
                                    id: 'm1.2.111r1',
                                    message: 'Voltar ao menu principal',
                                    sended: true,
                                    next: 'm1'
                                })
                            ]
                        }),
                        new Message({
                            id: 'm1.2.131',
                            message: `
                                DADOS DE CONTATO DA VARA DO TRABALHO DE ROLIM DE MOURA - RO
                                <ul>
                                    <li><a href="https://meet.google.com/wuo-sngm-ygd" target="_blank">Balcão Virtual (MEET)</a></li>
                                    <li><b>Email</b>: <a href="mailto:vtrolim@trt14.jus.br">vtrolim@trt14.jus.br</a></li>
                                    <li><b>Telefone</b>: <a href="tel:(69) 99236-1498" title="Ligar">(69) 99236-1498</a></li>
                                    <li><b>Whatsapp</b>: <a href="https://wa.me/6934421261" title="Entrar em contato pelo whatsapp" target="_blank">Whatsapp</a></li>
                                    <li><b>Horário de atendimento</b>: Segunda a sexta, das 7:30 às 14:30 em seu horário local.</li>
                                    <li><b>Endereço</b>: Rua Jaguaribe, 4329, Centro, Rolim de Moura - RO, CEP: 76940-000</li>
                                </ul>
                            `,
                            options: [
                                new Message({
                                    id: 'm1.2.131r1',
                                    message: 'Voltar ao menu principal',
                                    sended: true,
                                    next: 'm1'
                                })
                            ]
                        }),
                        new Message({
                            id: 'm1.2.141',
                            message: `
                                DADOS DE CONTATO DA VARA DO TRABALHO DE VILHENA - RO
                                <ul>
                                    <li><a href="https://meet.google.com/yyb-vafz-rhh" target="_blank">Balcão Virtual (MEET)</a></li>
                                    <li><b>Email</b>: <a href="mailto:vtvilhena@trt14.jus.br">vtvilhena@trt14.jus.br</a></li>
                                    <li><b>Telefone</b>: <a href="tel:(69) 99975-3196" title="Ligar">(69) 99975-3196</a></li>
                                    <li><b>Horário de atendimento</b>: Segunda a sexta, das 7:30 às 14:30 em seu horário local.</li>
                                    <li><b>Endereço</b>: Av. Rony de Castro Pereira, 3945, Jardim América, Vilhena - RO, CEP: 76980-000</li>
                                </ul>                            
                            `,
                            options: [
                                new Message({
                                    id: 'm1.2.141r1',
                                    message: 'Voltar ao menu principal',
                                    sended: true,
                                    next: 'm1'
                                })
                            ]
                        }),
                        new Message({
                            id: 'm1.2.151',
                            message: `
                                DADOS DE CONTATO DA VARA DO TRABALHO DE BURITIS - RO
                                <ul>
                                    <li><a href="https://meet.google.com/wak-evmv-qav" target="_blank">Balcão Virtual (MEET)</a></li>
                                    <li><b>Email</b>: <a href="mailto:vtburitis@trt14.jus.br">vtburitis@trt14.jus.br</a></li>
                                    <li><b>Telefone</b>: <a href="tel:(69) 99975-3093" title="Ligar">(69) 99975-3093</a></li>
                                    <li><b>Horário de atendimento</b>: Segunda a sexta, das 7:30 às 14:30 em seu horário local.</li>
                                    <li><b>Endereço</b>: Rua Cerejeiras, N° 1342, Setor 01, Buritis - RO, CEP: 76880-000</li>
                                </ul>
                            `,
                            options: [
                                new Message({
                                    id: 'm1.2.151r1',
                                    message: 'Voltar ao menu principal',
                                    sended: true,
                                    next: 'm1'
                                })
                            ]
                        }),
                        new Message({
                            id: 'm1.2.161',
                            message: `
                                DADOS DE CONTATO DA VARA DO TRABALHO DE MACHADINHO DOESTE - RO
                                <ul>
                                    <li><a href="https://meet.google.com/dur-fzkz-mbe" target="_blank">Balcão Virtual (MEET)</a></li>
                                    <li><b>Email</b>: <a href="mailto:vtmachadinho@trt14.jus.br">vtmachadinho@trt14.jus.br</a></li>
                                    <li><b>Telefone</b>: <a href="tel:(69) 99975-3153" title="Ligar">(69) 99975-3153</a></li>
                                    <li><b>Whatsapp</b>: <a href="https://wa.me/5569999753153" title="Entrar em contato pelo whatsapp" target="_blank">Whatsapp</a></li>
                                    <li><b>Horário de atendimento</b>: Segunda a sexta, das 7:30 às 14:30 em seu horário local.</li>
                                    <li><b>Endereço</b>: Rua Tocantins, N° 3097, Centro, Machadinho D'Oeste - RO, CEP: 76868-000</li>
                                </ul>
                            `,
                            options: [
                                new Message({
                                    id: 'm1.2.161r1',
                                    message: 'Voltar ao menu principal',
                                    sended: true,
                                    next: 'm1'
                                })
                            ]
                        }),
                        new Message({
                            id: 'm1.2.401',
                            message: `
                                DADOS DE CONTATO DA 1ª VARA DO TRABALHO DE RIO BRANCO - AC
                                <ul>
                                    <li><a href="https://meet.google.com/iyx-trcb-tcr" target="_blank">Balcão Virtual (MEET)</a></li>
                                    <li><b>Email</b>: <a href="mailto:vtrbo1@trt14.jus.br">vtrbo1@trt14.jus.br</a></li>
                                    <li><b>Telefone</b>: <a href="tel:(68) 3216-5616" title="Ligar">(68) 3216-5616</a></li>
                                    <li><b>Horário de atendimento</b>: Segunda a sexta, das 7:30 às 14:30 em seu horário local.</li>
                                    <li><b>Endereço</b>: Rua Benjamin Constant, N° 1121, Centro, Rio Branco - AC, CEP:69900-160</li>
                                </ul>
                            `,
                            options: [
                                new Message({
                                    id: 'm1.2.401r1',
                                    message: 'Voltar ao menu principal',
                                    sended: true,
                                    next: 'm1'
                                })
                            ]
                        }),
                        
                        new Message({
                            id: 'm1.2.402',
                            message: `
                                DADOS DE CONTATO DA 2ª VARA DO TRABALHO DE RIO BRANCO - AC
                                <ul>
                                    <li><a href="https://meet.google.com/qrf-yrkf-dyw" target="_blank">Balcão Virtual (MEET)</a></li>
                                    <li><b>Email</b>: <a href="mailto:vtrbo2@trt14.jus.br">vtrbo2@trt14.jus.br</a></li>
                                    <li><b>Telefone</b>: <a href="tel: (68) 3216-5626" title="Ligar"> (68) 3216-5626</a></li>
                                    <li><b>Whatsapp</b>: <a href="https://wa.me/556832165626" title="Entrar em contato pelo whatsapp" target="_blank">Whatsapp</a></li>
                                    <li><b>Horário de atendimento</b>: Segunda a sexta, das 7:30 às 14:30 em seu horário local.</li>
                                    <li><b>Endereço</b>: Rua Benjamin Constant, N° 1121, Centro, Rio Branco - AC, CEP:69900-160</li>
                                </ul>
                            `,
                            options: [
                                new Message({
                                    id: 'm1.2.402r1',
                                    message: 'Voltar ao menu principal',
                                    sended: true,
                                    next: 'm1'
                                })
                            ]
                        }),
                        
                        new Message({
                            id: 'm1.2.403',
                            message: `
                                DADOS DE CONTATO DA 3ª VARA DO TRABALHO DE RIO BRANCO - AC
                                <ul>
                                    <li><a href="https://meet.google.com/xeq-qtot-brh" target="_blank">Balcão Virtual (MEET)</a></li>
                                    <li><b>Email</b>: <a href="mailto:vtrbo3@trt14.jus.br">vtrbo3@trt14.jus.br</a></li>
                                    <li><b>Telefone</b>: <a href="tel:(68) 3216-5632" title="Ligar">(68) 3216-5632</a></li>
                                    <li><b>Horário de atendimento</b>: Segunda a sexta, das 7:30 às 14:30 em seu horário local.</li>
                                    <li><b>Endereço</b>: Rua Benjamin Constant, N° 1121, Centro, Rio Branco - AC, CEP:69900-160</li>
                                </ul>
                            `,
                            options: [
                                new Message({
                                    id: 'm1.2.403r1',
                                    message: 'Voltar ao menu principal',
                                    sended: true,
                                    next: 'm1'
                                })
                            ]
                        }),
                        new Message({
                            id: 'm1.2.404',
                            message: `
                                DADOS DE CONTATO DA 4ª VARA DO TRABALHO DE RIO BRANCO - AC
                                <ul>
                                    <li><a href="https://meet.google.com/ecy-txgo-rgz" target="_blank">Balcão Virtual (MEET)</a></li>
                                    <li><b>Email</b>: <a href="mailto:vtrbo4@trt14.jus.br">vtrbo4@trt14.jus.br</a></li>
                                    <li><b>Telefone</b>: <a href="tel:(68) 3216-5640" title="Ligar">(68) 3216-5640</a></li>
                                    <li><b>Horário de atendimento</b>: Segunda a sexta, das 7:30 às 14:30 em seu horário local.</li>
                                    <li><b>Endereço</b>: Rua Benjamin Constant, N° 1121, Centro, Rio Branco - AC, CEP:69900-160</li>
                                </ul>
                            `,
                            options: [
                                new Message({
                                    id: 'm1.2.404r1',
                                    message: 'Voltar ao menu principal',
                                    sended: true,
                                    next: 'm1'
                                })
                            ]
                        }),
                        new Message({
                            id: 'm1.2.411',
                            message: `
                                DADOS DE CONTATO DA VARA DO TRABALHO DE EPITACIOLÂNDIA - AC
                                <ul>
                                    <li><a href="https://meet.google.com/uon-eykd-zer" target="_blank">Balcão Virtual (MEET)</a></li>
                                    <li><b>Email</b>: <a href="mailto:vtepitaciolandia@trt14.jus.br">vtepitaciolandia@trt14.jus.br</a></li>
                                    <li><b>Telefone</b>: <a href="tel:(68) 3546-3795" title="Ligar">(68) 3546-3795</a></li>
                                    <li><b>Telefone</b>: <a href="tel:(68) 99971-1635" title="Ligar">(68) 99971-1635</a></li>
                                    <li><b>Horário de atendimento</b>: Segunda a sexta, das 7:30 às 14:30 em seu horário local.</li>
                                    <li><b>Endereço</b>: BR 317, KM 01, N° 725, Aeroporto, Epitaciolândia - AC, CEP: 69934-000</li>
                                </ul>
                            `,
                            options: [
                                new Message({
                                    id: 'm1.2.411r1',
                                    message: 'Voltar ao menu principal',
                                    sended: true,
                                    next: 'm1'
                                })
                            ]
                        }),
                        new Message({
                            id: 'm1.2.416',
                            message: `
                                DADOS DE CONTATO DA VARA DO TRABALHO DE CRUZEIRO DO SUL - AC
                                <ul>
                                    <li><a href="https://meet.google.com/fos-sbww-cbt" target="_blank">Balcão Virtual (MEET)</a></li>
                                    <li><b>Email</b>: <a href="mailto:vtcruzeiro@trt14.jus.br">vtcruzeiro@trt14.jus.br</a></li>
                                    <li><b>Telefone</b>: <a href="tel:(68) 99971-1638" title="Ligar">(68) 99971-1638</a></li>
                                    <li><b>Telefone</b>: <a href="tel:(68) 99986-1560" title="Ligar">(68) 99986-1560</a></li>
                                    <li><b>Horário de atendimento</b>: Segunda a sexta, das 7:30 às 14:30 em seu horário local.</li>
                                    <li><b>Endereço</b>: Rua Rui Barbosa, N° 440 , Centro, Cruzeiro do Sul - AC, CEP: 69980-000</li>
                                </ul>
                            `,
                            options: [
                                new Message({
                                    id: 'm1.2.416r1',
                                    message: 'Voltar ao menu principal',
                                    sended: true,
                                    next: 'm1'
                                })
                            ]
                        }),
                        new Message({
                            id: 'm1.2.421',
                            message: `
                                DADOS DE CONTATO DA VARA DO TRABALHO DE FEIJÓ - AC
                                <ul>
                                    <li><a href="https://meet.google.com/myj-djbd-qfk" target="_blank">Balcão Virtual (MEET)</a></li>
                                    <li><b>Email</b>: <a href="mailto:vtfeijo@trt14.jus.br">vtfeijo@trt14.jus.br</a></li>
                                    <li><b>Telefone</b>: <a href="tel:(68) 99971-1646" title="Ligar">(68) 99971-1646</a></li>
                                    <li><b>Telefone</b>: <a href="tel:(68) 3463-2058" title="Ligar">(68) 3463-2058</a></li>
                                    <li><b>Horário de atendimento</b>: Segunda a sexta, das 7:30 às 14:30 em seu horário local.</li>
                                    <li><b>Endereço</b>: Rua Anastácio Barroso, N° 344, Centro, Feijó - AC, CEP: 69960-000</li>
                                </ul>
                            `,
                            options: [
                                new Message({
                                    id: 'm1.2.421r1',
                                    message: 'Voltar ao menu principal',
                                    sended: true,
                                    next: 'm1'
                                })
                            ]
                        }),
                        new Message({
                            id: 'm1.2.425',
                            message: `
                                DADOS DE CONTATO DA VARA DO TRABALHO DE PLÁCIDO DE CASTRO - AC
                                <ul>
                                    <li><a href="https://meet.google.com/jts-qttv-sev" target="_blank">Balcão Virtual (MEET)</a></li>
                                    <li><b>Email</b>: <a href="mailto:vtplacido@trt14.jus.br">vtplacido@trt14.jus.br</a></li>
                                    <li><b>Telefone</b>: <a href="tel:(68) 99971-1640" title="Ligar">(68) 99971-1640</a></li>
                                    <li><b>Horário de atendimento</b>: Segunda a sexta, das 7:30 às 14:30 em seu horário local.</li>
                                    <li><b>Endereço</b>: Av. Epitácio Pessoa, 288, Centro, Plácido de Castro - AC, CEP: 69928-000</li>
                                </ul>
                            `,
                            options: [
                                new Message({
                                    id: 'm1.2.425r1',
                                    message: 'Voltar ao menu principal',
                                    sended: true,
                                    next: 'm1'
                                })
                            ]
                        }),
                        new Message({
                            id: 'm1.2.426',
                            message: `
                                DADOS DE CONTATO DA VARA DO TRABALHO DE SENA MADUREIRA - AC
                                <ul>
                                    <li><a href="https://meet.google.com/exi-orio-hoq" target="_blank">Balcão Virtual (MEET)</a></li>
                                    <li><b>Email</b>: <a href="mailto:vtsena@trt14.jus.br">vtsena@trt14.jus.br</a></li>
                                    <li><b>Telefone</b>: <a href="tel:(68) 3212-2363" title="Ligar">(68) 3212-2363</a></li>
                                    <li><b>Telefone</b>: <a href="tel:(68) 3612-2633" title="Ligar">(68) 3612-2633</a></li>
                                    <li><b>Telefone</b>: <a href="tel:(68) 99971-1647" title="Ligar">(68) 99971-1647</a></li>
                                    <li><b>Horário de atendimento</b>: Segunda a sexta, das 7:30 às 14:30 em seu horário local.</li>
                                    <li><b>Endereço</b>: Rua Virgulino de Alencar, 235, Centro, Sena Madureira - AC, CEP: 69940-000</li>
                                </ul>
                            `,
                            options: [
                                new Message({
                                    id: 'm1.2.426r1',
                                    message: 'Voltar ao menu principal',
                                    sended: true,
                                    next: 'm1'
                                })
                            ]
                        }),
                        new Message({
                            id: 'm.pi.1',
                            message: 'Informe o número de seu processo',
                            input: new MessageInput({
                                has: true,
                                placeholder: 'Informe o número do processo',
                                processMask: true
                            })
                        }),
                        new Message({
                            id: `notFound404`,
                            message: 'Não encontramos o que está procurando. Por favor, tente novamente ou entre em contato com a nossa ouvidoria.',
                            sended: false,
                            direction: 'vertical',
                            options: [
                                new Message({
                                    id: 'notFound404.r1',
                                    message: 'Obter contatos da ouvidoria',
                                    sended: true,
                                    next: 'm1.6.1'
                                }),
                                new Message({
                                    id: 'notFound404.r2',
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