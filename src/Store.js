import { configureStore } from '@reduxjs/toolkit'
import{employeeSlice} from './redux/reducer/Slice.jsx';
export default configureStore({
  reducer: {
    employee:employeeSlice.reducer
  },
})