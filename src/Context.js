import { createContext } from "react";

const Context = createContext([{ loading: false, user: null }, () => {}]);

export default Context;
