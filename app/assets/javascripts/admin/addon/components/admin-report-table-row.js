import classic from "ember-classic-decorator";
import { classNames, tagName } from "@ember-decorators/component";
import Component from "@ember/component";
@classic
@tagName("tr")
@classNames("admin-report-table-row")
export default class AdminReportTableRow extends Component {
  options = null;
}
