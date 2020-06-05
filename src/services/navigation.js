import { CommonActions } from '@react-navigation/native';

let navigator;

function setNavigator(ref) {
  navigator = ref;
}

function navigate(name, params) {
  if (navigator && name) {
    const action = CommonActions.navigate({ name, params });
    navigator.dispatch(action);
  }
}

export { setNavigator, navigate };
