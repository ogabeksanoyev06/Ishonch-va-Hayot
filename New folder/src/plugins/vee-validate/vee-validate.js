import Vue from 'vue'
import {ValidationProvider, ValidationObserver, extend, configure} from 'vee-validate'
import {required, min, max, email} from "vee-validate/dist/rules";

export default function ({app}) {
	configure({
		defaultMessage: (field, values) => {
			values._field_ = app.i18n.t(`${field}`);
			return app.i18n.t(`validation.${values._rule_}`, values);
		}
	});
}

extend("required", required);
extend("min", min);
extend("max", max);
extend("email", email);

Vue.component('ValidationProvider', ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
