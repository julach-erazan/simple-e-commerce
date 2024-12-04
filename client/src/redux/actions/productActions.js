import axios from "axios";
import { rejectProductList, successProductList } from "../slices/productSlice";
import {
  notificationType,
  openNotification,
} from "../slices/notificationSlice";

export const loadProductListAction = () => async (dispatch, getState) => {

    // const { token } = getState().auth;

    // if (token) throw new Error("")

   await axios
    .get("/productList.json", /* {
        headers: {
            "Authorization":  `Bearer ${token}` // If the backend contains JWT Authentication 
        }
    } */)
    .then((res) => {
      dispatch(successProductList(res.data));
    })
    .catch((e) => {
      dispatch(rejectProductList(e));
      dispatch(
        openNotification({
          type: notificationType.ERROR,
          message: "Error Occured",
          description: "There might be a problem in our servers",
        })
      );
    });
};
