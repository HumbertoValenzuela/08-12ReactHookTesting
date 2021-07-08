import React from 'react';
import {CounterApp, CounterAppObjeto, CounterAppObjetoSpreadOperator} from './components/01-useState/CounterApp';
import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
import { SimpleForm } from './components/02-useEffect/SimpleForm';
import { SimpleFormUnmountCleanup } from './components/02-useEffect/SimpleFormUnmountCleanup';
import { MultipleCustomHokk } from './components/03-examples/MultipleCustomHokk';
import { FocusScreen } from './components/04-useRef/FocusScreen';
import { RealExampleRef } from './components/04-useRef/RealExampleRef';
import { Layout } from './components/05-useLayoutEffect/Layout';
import { CallbackHook } from './components/06-memos/CallbackHook';
import { MemoHook } from './components/06-memos/MemoHook';
import { Memorize } from './components/06-memos/Memorize';
import { Padre } from './components/07-tarea-memo/Padre';
import { IntroReducer } from './components/08-useReducer/IntroReducer';
import { TodoApp } from './components/08-useReducer/TodoApp';
import { MainApp } from './components/09-useContext/MainApp';

export const HookApp = () => {
    return (
        <div>
            <h4>useState con valor fijo en 10</h4>
            <CounterApp />
            <hr />
            <h4>useState con objeto. Se pierde el estado actual de counter2</h4>
            <CounterAppObjeto />
            <hr />
            <h4>useState con objeto. Y utilizando el Spread Operator</h4>
            <CounterAppObjetoSpreadOperator />
            <hr />
            <h4>CounterWithCustomHook</h4>
            <CounterWithCustomHook />
            <hr />
            <h4>useEffect: ejecutar Efecto Secundario</h4>
            <SimpleForm />
            <hr />
            <h4>useEffect: Unmount Cleanup</h4>
            <SimpleFormUnmountCleanup />
            <hr />
            <h4>9._Formulario_con_custom_Hook. Custom Hook para manejar formulario</h4>
            <FormWithCustomHook />
            <hr />
            <h4>10._useFetch_-_CustomHook </h4>
            <MultipleCustomHokk />
            <hr />
            <h4>12._useRef_-_Primer_uso </h4>
            <FocusScreen />
            <hr />
            <h4>13._useRef_-_Caso_de_uso_real </h4>
            <RealExampleRef />
            <hr />
            <h4>14._useLayoutEffect </h4>
            <Layout />
            <hr />
            <h4>15._Memo_-_M+®todo_de_React </h4>
            <Memorize />
            <hr />
            <h4>16._useMemo</h4>
            <MemoHook />
            <hr />
            <h4>17._useCallback</h4>
            <CallbackHook />
            <hr />
            <h4>18._Tarea_Memorize</h4>
            <Padre />    
            <hr />
            <h4>4._Idea_general_de_un_reducer_-_Vía_código</h4>
            <IntroReducer />   
            <hr />
            <h4>5._useReducer_-_Todo_List</h4>
            <TodoApp />     
            <hr />
            <h4>11. Profundizando Hooks - useContext</h4>
            <MainApp />               
            
        </div>
    )
}

