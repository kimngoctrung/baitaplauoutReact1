import logo from "./logo.svg";
import "./App.css";
import DemoFunction from "./Components/DemoFunction";
import DemoClass from "./Components/DemoClass";
import CardProduct from "./Components/CardProduct";
import BaiTapLayout1 from "./Components/BaiTapLayout1/BaiTapLayout1";
import Databiding from "./Databiding/Databiding";
import BaiTapThucHanhLayout from "./Components/BaiTapThucHanhLayout/BaiTapThucHanhLayout";
import Styles from "./Components/DemoComponent/Styles";
import HandleEvent from "./HandleEvent/HandleEvent";
import StateDemo from "./StateDemo/StateDemo";
import BaiTapChonXe from "./StateDemo/BaiTapChonXe";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import BaiTapPhim from "./BaiTapPhim/BaiTapPhim";
import DanhSachSPProps from "./Props/DemoProps/DanhSachSPProps";
import Products from "./Props/BaiTapProps/Products";
import BaiTapThuKinh from "./BaiTapThuKinh/BaiTapThuKinh";
import BaiTapGioHangRedux from "./DemoRedux/BT/BTGioHangRedux/BaiTapGioHangRedux";

function App() {
  return (
    <div className="App ">
      {/* <BaiTapLayout1 /> */}
      {/* <Databiding /> */}
      {/* <BaiTapThucHanhLayout /> */}
      {/* <Styles /> */}
      {/* <HandleEvent /> */}
      {/* <StateDemo /> */}
      {/* <BaiTapChonXe /> */}
      {/* <RenderWithMap /> */}
      {/* <BaiTapPhim /> */}
      {/* <DanhSachSPProps /> */}
      {/* <Products /> */}
      {/* <BaiTapThuKinh /> */}
      <BaiTapGioHangRedux />
    </div>
  );
}

export default App;
