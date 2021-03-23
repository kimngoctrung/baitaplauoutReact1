const stateDefault = {
  gioHang: [
    // {
    //   maSP: 1,
    //   tenSP: "Iphone x",
    //   gia: 1000,
    //   soLuong: 1,
    //   hinhAnh: "https://picsum.photos/200/200",
    // },
  ],
};

export const gioHangReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "THEM_GIO_HANG": {
      // xu ly thay doi state
      console.log("action", action);
      //cap Nhat Gio hang
      const gioHangCapNhat = [...state.gioHang];
      //Kiem Tra SP Do Co Trong Gio Hang Hay Khong
      let index = gioHangCapNhat.findIndex(
        (spGH) => spGH === action.spGioHang.maSP
      );
      if (index !== -1) {
        gioHangCapNhat[index].soLuong += 1;
      } else {
        gioHangCapNhat.push(action.spGioHang);
      }
      // cap nhat lai state tuong ung setState
      state.gioHang = gioHangCapNhat;
      return { ...state };
    }

    case "XOA_GIO_HANG": {
      const gioHangCapNhat = [...state.gioHang];
      ////tim sp dc click nut xoa
      let index = gioHangCapNhat.findIndex((spGH) => spGH.maSP === action.maSP);
      {
        if (index == !-1) {
          gioHangCapNhat.splice(index, 1);
        }
        // cat nhat lai
        state.gioHang = gioHangCapNhat;
        return { ...state };
      }
    }
    case "TANG_GIAM_SO_LUONG": {
      const gioHangCapNhat = [...state.gioHang];
      let index = gioHangCapNhat.findIndex((spGH) => spGH.maSP === action.maSP);
      if (index == !-1) {
        gioHangCapNhat[index].soLuong += action.soLuong;
        if (gioHangCapNhat[index].soLuong < 1) {
          alert("Số lượng tối thiểu là 1 ");
          gioHangCapNhat[index].soLuong -= action.soLuong;
          return { ...state };
        }
      }

      state.gioHang = gioHangCapNhat;
      return { ...state };
    }
  }
  return { ...state };
};
