window.onload = () => {
  const soundcloudTrackId = getSoundcloudTrackIdFromDocument();

  prependContentToTitle(`[${soundcloudTrackId}]`);
};

const prependContentToTitle = content => {
  /**
   * The elements are set up like:
   * <span class="soundTitle__title">
   *  <span>The Track Title</span>
   * </span>
   */
  const titleSpan = $("span.soundTitle__title > span")[0];

  const currentTitle = titleSpan.innerText;
  const prependedTitle = content + " " + currentTitle;
  titleSpan.innerText = prependedTitle;
};

const getSoundcloudTrackIdFromDocument = () => {
  const googleplaySoundcloudUrlMetaTag = $(
    "meta[property='twitter:app:url:googleplay']"
  );
  const soundcloudTrackUrl = googleplaySoundcloudUrlMetaTag.prop("content");
  return soundcloudTrackUrl.replace("soundcloud://sounds:", "");
};
