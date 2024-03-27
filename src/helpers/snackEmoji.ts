

export function snackEmoji(name: string){
  switch(name.toLowerCase()){
    case 'hamburguer':
      return '🍔'
    case 'pizza':
      return '🍕'
    case 'bebida':
      return '🥤'
    case 'sorvete':
      return '🍨'
    default:
      return '👨🏽‍🦱🔎'
  }
}
