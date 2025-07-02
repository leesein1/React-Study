import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./routes/Home";
import Detail from "./routes/Detail";
import HooksInput from "./hooks/App_useInput.js";
import HooksTabs from "./hooks/App_useTabs.js";
import HooksTitle from "./hooks/App_useTitle.js";
import HooksClick from "./hooks/App_useClick.js";
import HooksHover from "./hooks/App_useHover.js";
import HooksConfirm from "./hooks/App_useConfirm.js";
import HooksPrevetnLeave from "./hooks/App_usePreventLeave.js";
import HooksBeforeLeave from "./hooks/App_useBeforeLeave.js";
import HooksFadeIn from "./hooks/App_useFadeIn.js";
import HooksNetwork from "./hooks/App_useNetwork.js";
import HooksScroll from "./hooks/App_useScroll.js";
import HooksFullScreen from "./hooks/App_useFullScreen.js";
import HooksNoti from "./hooks/App_useNoti.js";
import HooksAxios from "./hooks/App_useAxios.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/hello" element={<p>hello</p>} />
        <Route path="/movie/:id" element={<Detail />} />

        <Route path='/hooks-input' element={<p>{<HooksInput/>}</p>} />
        <Route path='/hooks-tabs' element={<p>{<HooksTabs/>}</p>} />
        <Route path='/hooks-title' element={<p>{<HooksTitle/>}</p>} />
        <Route path="/hooks-click" element={<p><HooksClick/></p>} />
        <Route path="/hooks-hover" element={<p><HooksHover/></p>} />
        <Route path="/hooks-confirm" element={<p><HooksConfirm/></p>} />
        <Route path="/hooks-prevent" element={<p><HooksPrevetnLeave/></p>} />
        <Route path="/hooks-beforeLeave" element={<p><HooksBeforeLeave/></p>} />
        <Route path="/hooks-fadeIn" element={<p><HooksFadeIn/></p>} />
        <Route path="/hooks-network" element={<p><HooksNetwork/></p>} />
        <Route path="/hooks-scroll" element={<p><HooksScroll/></p>} />
        <Route path="/hooks-fullScreen" element={<p><HooksFullScreen/></p>} />
        <Route path="/hooks-noti" element={<p><HooksNoti/></p>} />
        <Route path="/hooks-axios" element={<p><HooksAxios/></p>} />
  
        <Route path="*" element={<p>404 Not Found</p>} />
      </Routes>
    </Router>
  );
}

export default App;
