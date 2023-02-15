import classic from "ember-classic-decorator";
import { classNames } from "@ember-decorators/component";
import Component from "@ember/component";
import discourseComputed from "discourse-common/utils/decorators";

@classic
@classNames("penalty-history")
export default class AdminPenaltyHistory extends Component {
  @discourseComputed("user.penalty_counts.suspended")
  suspendedCountClass(count) {
    if (count > 0) {
      return "danger";
    }
    return "";
  }

  @discourseComputed("user.penalty_counts.silenced")
  silencedCountClass(count) {
    if (count > 0) {
      return "danger";
    }
    return "";
  }
}
