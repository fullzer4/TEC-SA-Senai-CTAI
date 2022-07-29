
import "./teorias.css"

export default function Teorias() {
    return(
        <div id="experiment">
            <div className="container-out">
                <div className="out-in">
                    <h1 className="title-ini">Termodinamica</h1>
                    <p className="text-ini">A Termodinâmica estuda a troca de matéria e a troca de energia pelo trabalho e pelo calor entre sistemas ou entre um sistema e sua vizinhança. Trabalha com os estados de equilíbrio e com as propriedades macroscópicas que caracterizam os sistemas.</p>
                </div>
                <div className="out-in reverse2">
                    <h1 className="title-ini">Primeira Lei</h1>
                    <p className="text-ini">“Se um sistema troca energia com a vizinhança por calor e por trabalho”, então a variação da sua energia interna é dada por: ΔU = Q − W. Esta lei representa a aplicação do princípio de conservação da energia a sistemas termodinâmicos.</p>
                </div>
            </div>
            <div className="container-out">
                <div className="out-in">
                    <h1 className="title-ini">Segunda Lei</h1>
                    <p className="text-ini">“O calor não pode fluir, de maneira espontânea, de um corpo de temperatura menor, para outro corpo de temperatura mais alta.” Logo a variação da sua energia interna é dada por: ΔU = Q + W. A partir disso podemos concluir que um corpo mais frio não irá perder energia em forma de calor para um corpo mais quente.</p>
                </div>
                <div className="out-in reverse2">
                    <h1 className="title-ini">Eficiencia energetica</h1>
                    <p className="text-ini">A eficiência energética tem como objetivo otimizar o aproveitamento das fontes de energia para reduzir custos e colaborar com o meio ambiente. Isso significa realizar os mesmos processos utilizando menos recursos.</p>
                </div>
            </div>
            <div className="container-out">
                <div className="out-in">
                    <h1 className="title-ini">Rendimento Maquina Termica</h1>
                    <p className="text-ini">é uma grandeza adimensional dada pela razão entre a quantidade de trabalho mecânico extraído de uma máquina térmica e a quantidade de energia fornecida a ela em forma de calor. Quanto maior o rendimento de uma máquina, maior será sua eficiência.</p>
                </div>
                <div className="out-in reverse2">
                    <h1 className="title-ini">Trabalho Maquina Termica</h1>
                    <p className="text-ini">Máquinas térmicas são dispositivos capazes de transformar energia térmica em trabalho mecânico. Toda máquina térmica necessita de uma fonte de calor e de uma substância de trabalho capaz de ter o seu volume modificado e, consequentemente, movimentar algum mecanismo, como válvulas ou pistões.</p>
                </div>
            </div>
        </div>
    )
  }