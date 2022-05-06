interface ButtonProps{
 text?: string
}

function Button (props: ButtonProps){
  return <button>{props.text ?? 'Default'}</button>
}
function App(){
  return <div>
    <Button text="enviar"/>
    <Button text="ok"/>
    <Button />
  </div>
}

export default App