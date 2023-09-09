/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors:{
      bgColor:"#FFFFFF",
      cardUpColor:"#6743FF",
      cardDownhColor:"#322BEA",
      cardTextColor:"#CDC2FF",
      cardRadius:"#452DDD",
      reaction:"#DA6F69",
      reactionBg:"#FFF6F5",
      memory:"#EDB854",
      memoryBg:"#FFFBF2",
      verbal:"#84E7D2",
      varbelBg:"#F2FBFA",
      visual:"#1B2191",
      visualBg:"#F3F3FD",
      barText:"#8D909F",
      sumry:"#303B59",
    },
    screens:{
      'sm': {'max': '639px'},
    }
  },
  plugins: [],
}

