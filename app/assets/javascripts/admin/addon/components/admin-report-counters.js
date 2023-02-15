import classic from "ember-classic-decorator";
import { attributeBindings, classNames } from "@ember-decorators/component";
import Component from "@ember/component";
@classic
@classNames("admin-report-counters")
@attributeBindings("model.description:title")
export default class AdminReportCounters extends Component {}
