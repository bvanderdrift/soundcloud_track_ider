window.onload = () => {
  const soundcloudTrackId = getSoundcloudTrackIdFromDocument();

  // We only get a track id if we are on a player page. Otherwise do nothing.
  if (soundcloudTrackId !== null) {
    prependContentToTitle(`[${soundcloudTrackId}]`);
  }
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

  // Check if we are on a track page, otherwise return null
  if (googleplaySoundcloudUrlMetaTag === undefined) {
    return null;
  }

  const soundcloudTrackUrl = googleplaySoundcloudUrlMetaTag.prop("content");
  return soundcloudTrackUrl.replace("soundcloud://sounds:", "");
};
