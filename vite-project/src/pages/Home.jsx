import { Header } from "../components/Header";
import * as s from "./HomeStyle";
import logo2 from "../assets/logo2.png";

export function Home() {

    const horarioDeFuncionamento = {
        diaSemana: [1, 2, 3, 4, 5, 6],
        horaAbertura: 10,
        horaFechamento: 19,
    };
    const dataAtual = new Date();
    const diaSemanaAtual = dataAtual.getDay();
    const horaAtual = dataAtual.getHours();

    const lojaAberta =
        horarioDeFuncionamento.diaSemana.includes(diaSemanaAtual) &&
        horaAtual >= horarioDeFuncionamento.horaAbertura &&
        horaAtual < horarioDeFuncionamento.horaFechamento;

    const avisoLoja = lojaAberta ? "Loja aberta" : "Loja fechada";
    console.log(avisoLoja);
    const goToWhatsapp = () => {
        window.location.href = 'https://wa.me/5562983318990';
    };

    const goToInstagram = () => {
        window.location.href = 'https://www.instagram.com/newcamila_multimarcas/';
    };

    return (
        <s.Container>
            <Header/>
            <s.Box>
                <img src={logo2} alt="Logo" />
                <s.Functionality>
                    <button onClick={goToWhatsapp}>Whatsapp</button>
                    <button onClick={goToInstagram}>Instagram</button>
                </s.Functionality>
                <s.Time lojaAberta={lojaAberta}>
                    <h3>Horário de funcionamento:</h3>
                    <h3>segunda à sábado</h3>
                    <h3>10:00 às 19:00</h3>
                    <p>{avisoLoja}</p>
                </s.Time>
                <s.Address>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5013.436084131549!2d-48.946811489834865!3d-16.33063646516985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ea46179cd5fff%3A0x873729325a116d9!2sNew%20Camila%20Multimarcas!5e0!3m2!1spt-BR!2sbr!4v1697985316183!5m2!1spt-BR!2sbr"
                        width="250"
                        height="150"
                        style={{ border: "0" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <h4>Rua Dr. Faustino nº92 - Jundiaí</h4>
                    <h5>Anápolis - GO</h5>
                </s.Address>
            </s.Box>
        </s.Container>
    );
}
