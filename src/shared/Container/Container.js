import {Provider} from "react-redux";
import store from "../../state/store";
import React from "react";

export const Container = ({children}) => (
    <Provider store={store}>
        {children}
    </Provider>
);

