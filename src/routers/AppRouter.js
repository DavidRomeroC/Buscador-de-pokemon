import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { DetailsScreen } from "./components/details/DetailsScreen"
import { ItemsScreen } from "./components/items/ItemsScreen"
import { SearchScreen } from "./components/search/SearchScreen"

export const AppRouter = () => {

    const [state, setState] = useState("");
    const [stateDos, setStateDos] = useState("");


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/items" element={<ItemsScreen setStateDos={setStateDos} state={state} />} />
                <Route path="/items/:id" element={<DetailsScreen stateDos={stateDos} />} />
                <Route path="/" element={<SearchScreen setState={setState} />} />
                <Route path="*" element={<SearchScreen />} />
            </Routes>
        </BrowserRouter>
    )
}
