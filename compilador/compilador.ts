let canal: string = "Gaveta";
let inscritos: number = 61323;

console.log(`Canal = ${canal}`);

function saudar(isManha: boolean) {
  let saudacao: string;
  if (isManha) {
    saudacao = "Bom Dia!";
  } else {
    saudacao = "Tenha uma boa vida!";
  }
  return saudacao;
}
