/* Fonte única de dados da Pró Fitness. Mexeu aqui, mudou no site e na bio.
   Itens marcados "CONFIRMAR" vêm de fontes públicas e precisam da confirmação do dono antes de publicar. */

const ACADEMIA = {
  nome: "Pró Fitness",
  assinatura: "Treinamento Integrado",
  slogan: "Transformando vidas através do exercício físico",
  cidade: "Uberaba, MG",
  endereco: "R. Benjamin Bernardino da Costa, 155",
  bairro: "Orlando Costa Teles",
  cep: "38035-350",
  telefone: "(34) 3314-4069",
  telefoneLink: "+553433144069",
  whatsapp: "5534991513300",
  whatsappVisivel: "(34) 99151-3300",
  instagram: "https://www.instagram.com/academiaprofitnessoficial/",
  arroba: "@academiaprofitnessoficial",
  facebook: "https://m.facebook.com/p/Pr%C3%B3-Fitness-Academia-100054619591920/", /* CONFIRMAR qual das 2 páginas é a oficial */
  tiktok: "",   /* preencher quando existir */
  youtube: "",  /* preencher quando existir */
  google: { nota: "4,6", avaliacoes: 52,
            perfil: "https://www.google.com/maps/search/?api=1&query=Academia+Pr%C3%B3+Fitness+Uberaba%2C+R.+Benjamin+Bernardino+da+Costa%2C+155" /* trocar pelo link direto de avaliação depois */ },
  mapaEmbed: "https://www.google.com/maps?q=Academia+Pr%C3%B3+Fitness+Uberaba%2C+R.+Benjamin+Bernardino+da+Costa%2C+155%2C+Uberaba+MG&output=embed",
  rotas: "https://www.google.com/maps/dir/?api=1&destination=Academia+Pr%C3%B3+Fitness+Uberaba%2C+R.+Benjamin+Bernardino+da+Costa%2C+155%2C+Uberaba+MG"
};

/* Horários publicados no Google (30/09/2026). CONFIRMAR com o dono. */
const HORARIOS = [
  { dia: "Segunda a sexta", faixas: ["06h às 11h", "14h às 21h"] },
  { dia: "Sábado",          faixas: ["09h às 12h"] },
  { dia: "Domingo",         faixas: ["Fechado"] }
];

/* Modalidades. ativo:false esconde do site sem apagar.
   Musculação, funcional e Pilates: bio do Instagram. Crossfit, lutas e danças: fachada antiga. CONFIRMAR. */
const MODALIDADES = [
  { id:"musc",  nome:"Musculação",           ativo:true, foco:true,
    desc:"Salão completo, com orientação de professores para você treinar com segurança e evoluir de verdade.",
    msg:"quero conhecer a musculação" },
  { id:"func",  nome:"Treinamento funcional", ativo:true, foco:true,
    desc:"Movimentos do dia a dia para ganhar força, resistência e condicionamento, em um treino dinâmico.",
    msg:"quero conhecer o treinamento funcional" },
  { id:"pil",   nome:"Pilates",              ativo:true, foco:true,
    desc:"Postura, flexibilidade e consciência corporal, com atenção individual do começo ao fim.",
    msg:"quero conhecer o Pilates" },
  { id:"cross", nome:"Crossfit",             ativo:true, foco:false,
    desc:"Treino intenso e variado, em grupo, para quem gosta de desafio.",
    msg:"quero saber sobre o Crossfit" },
  { id:"lutas", nome:"Lutas",                ativo:true, foco:false,
    desc:"Aulas de luta para condicionamento, disciplina e defesa pessoal.",
    msg:"quero saber sobre as aulas de lutas" },
  { id:"danca", nome:"Danças",               ativo:true, foco:false,
    desc:"Aulas animadas para se mexer, gastar energia e se divertir.",
    msg:"quero saber sobre as aulas de dança" }
];

/* Diferenciais: o que os próprios alunos elogiam no Google e o que a academia diz na página do Facebook. */
const DIFERENCIAIS = [
  { t:"Professores qualificados", d:"Acompanhamento próximo de quem entende de treino.", icone:"prof" },
  { t:"Ambiente limpo e arejado", d:"Espaço bem cuidado, climatizado e agradável para treinar.", icone:"ar" },
  { t:"Fácil de chegar", d:"Localização central em Uberaba e estacionamento fácil.", icone:"pin" },
  { t:"Equipamentos novos", d:"Aparelhos para todos os níveis, do primeiro dia ao treino avançado.", icone:"hal" }
];

/* Comentários reais de alunos no Google (trechos). CONFIRMAR autorização/atualizar com os mais recentes. */
const DEPOIMENTOS = [
  { t:"Boa localização, bons treinadores, espaço bem arejado.", f:"Avaliação no Google" },
  { t:"Excelente, ambiente limpo, profissionais educados e competentes.", f:"Avaliação no Google" },
  { t:"Ótimo atendimento e acompanhamento com os alunos.", f:"Avaliação no Google" }
];

const GALERIA = [
  { src:"img/galeria/g01.jpg", r:1.7763, alt:"Salão de musculação da Pró Fitness com aparelhos e paredes azuis" },
  { src:"img/galeria/g02.jpg", r:0.5625, alt:"Aula de treinamento funcional em grupo na Pró Fitness" },
  { src:"img/galeria/g03.jpg", r:0.5625, alt:"Esteiras da Pró Fitness ao lado da janela" },
  { src:"img/galeria/g07.jpg", r:1.7763, alt:"Fachada da Academia Pró Fitness durante o dia" }
];

/* Vídeos: capa + play, abre o reel no Instagram (padrão Zebubit, sem embed) */
const REELS = [
  { id:"DKhjt41Antn", t:"Sua saúde em ótimas mãos" },
  { id:"DJ4oPGeArmf", t:"Treino funcional em grupo" },
  { id:"DHgJzixAgHe", t:"Treino em dupla" },
  { id:"DbB4kXFvp2I", t:"Ninguém volta da academia infeliz" },
  { id:"DHoqRPKymqY", t:"Disciplina no salão" }
];

/* Mensagem padrão do WhatsApp: mostra a origem do contato */
function zap(texto, origem){
  origem = origem || "site";
  var o = origem === "bio" ? "pelo link do Instagram" : "pelo site";
  return "https://wa.me/" + ACADEMIA.whatsapp + "?text=" + encodeURIComponent("Olá! Vim " + o + " e " + texto);
}

/* Plataformas de bem-estar em que a academia aparece. CONFIRMAR se ainda vale. */
const PLATAFORMAS = ["TotalPass", "Wellhub"];

/* Funcionamento em números (0 = domingo). Usado no selo "Aberto agora". */
const FUNCIONAMENTO = { 0: [], 1: [[6,11],[14,21]], 2: [[6,11],[14,21]], 3: [[6,11],[14,21]], 4: [[6,11],[14,21]], 5: [[6,11],[14,21]], 6: [[9,12]] };
