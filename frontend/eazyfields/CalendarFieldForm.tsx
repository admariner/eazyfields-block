import loglevel from "loglevel";
const log = loglevel.getLogger("CalendarFieldForm");
log.setLevel("info");

import React from "react";

import { observer } from "mobx-react-lite";

import BoundSelect from "../components/BoundSelect";
import EazyfieldForm from "./EazyfieldForm";
import CalendarField from "../models/CalendarField";
import FormItem from "../components/FormItem";

const CalendarFieldForm = observer(({ field }: { field: CalendarField }) => {
	log.debug("CalendarFieldForm.render");

	const widthOptions = field.widthOptions;

	return (
		<EazyfieldForm field={field}>
			<BoundSelect
				name="width"
				rules={[{ required: true, message: "Please select a format" }]}
				label="Format of field values:"
				model={field}
				prop="width"
				options={widthOptions}
				defaultValue={widthOptions.length ? widthOptions[0].value : null}
				placeholder="Loading options in selected language"
				layout={FormItem.getLayoutProps(24)}
			/>
		</EazyfieldForm>
	);
});

export default CalendarFieldForm;
