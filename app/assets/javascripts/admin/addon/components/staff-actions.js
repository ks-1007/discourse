import classic from "ember-classic-decorator";
import { tagName } from "@ember-decorators/component";
import { action } from "@ember/object";
import Component from "@ember/component";
import DiscourseURL from "discourse/lib/url";

@classic
@tagName("")
export default class StaffActions extends Component {
  @action
  openLinks(event) {
    const dataset = event.target.dataset;

    if (dataset.linkPostId) {
      event.preventDefault();

      this.store.find("post", dataset.linkPostId).then((post) => {
        DiscourseURL.routeTo(post.url);
      });
    } else if (dataset.linkTopicId) {
      event.preventDefault();

      DiscourseURL.routeTo(`/t/${dataset.linkTopicId}`);
    }
  }
}
