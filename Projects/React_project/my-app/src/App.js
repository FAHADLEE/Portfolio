import './App.css';

function App() {
  return (
    <div class="container">
        <div class="calculator">
            <form>
                <div class="display">
                    <input name="display" type="text"/>
                </div>
                <div>
                    <input type="button" value="AC" onclick="display.value=''" class="dif"/>
                    <input type="button" value="DE" onclick="display.value= display.value.toString().slice(0,-1)" class="dif"/>
                    <input type="button" value="." onclick="display.value +='.'" class="dif"/>
                    <input type="button" value="/" onclick="display.value +='/'" class="dif"/>
                </div>
                <div>
                    <input type="button" value="7" onclick="display.value +='7'"/>
                    <input type="button" value="8" onclick="display.value +='8'"/>
                    <input type="button" value="9" onclick="display.value +='9'"/>
                    <input type="button" value="*" onclick="display.value +='*'" class="dif"/>
                </div>
                <div>
                    <input type="button" value="4" onclick="display.value +='4'"/>
                    <input type="button" value="5" onclick="display.value +='5'"/>
                    <input type="button" value="6" onclick="display.value +='6'"/>
                    <input type="button" value="-" onclick="display.value +='-'" class="dif"/>
                </div>
                <div>
                    <input type="button" value="1" onclick="display.value +='1'"/>
                    <input type="button" value="2" onclick="display.value +='2'"/>
                    <input type="button" value="3" onclick="display.value +='3'"/>
                    <input type="button" value="+" onclick="display.value +='+' "class="dif" />
                </div>
                <div>
                    <input type="button" value="0" onclick="display.value +='0'"/>
                    <input type="button" value="00" onclick="display.value +='00'"/>
                    <input type="button" value="=" class="equal dif" onclick="display.value = eval(display.value)"/>
                </div>
            </form>
        </div>
    </div>
  );
}

export default App;
