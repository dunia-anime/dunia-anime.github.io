    var playlist = player.playlist = function (newList, newIndex) {
        if (newIndex === void 0) {
            newIndex = 0;
        }

        if (changing) {
            throw new Error('do not call playlist() during a playlist change');
        }

        if (Array.isArray(newList)) {
            // @todo - Simplify this to `list.slice()` for v5.
            var previousPlaylist = Array.isArray(list) ? list.slice() : null;
            var nextPlaylist = newList.slice();
            list = nextPlaylist.slice(); // Transform any primitive and null values in an input list to objects

            if (list.filter(function (item) {
                    return isItemObject(item);
                }).length !== list.length) {
                list = transformPrimitiveItems(list);
            } // Add unique id to each playlist item. This id will be used
            // to determine index in cases where there are more than one
            // identical sources in the playlist.


            generatePlaylistItemId(list); // Mark the playlist as changing during the duringplaylistchange lifecycle.

            changing = true;
            player.trigger({
                type: 'duringplaylistchange',
                nextIndex: newIndex,
                nextPlaylist: nextPlaylist,
                previousIndex: playlist.currentIndex_,
                // @todo - Simplify this to simply pass along `previousPlaylist` for v5.
                previousPlaylist: previousPlaylist || []
            });
            changing = false;

            if (newIndex !== -1) {
                playlist.currentItem(newIndex);
            } // The only time the previous playlist is null is the first call to this
            // function. This allows us to fire the `duringplaylistchange` event
            // every time the playlist is populated and to maintain backward
            // compatibility by not firing the `playlistchange` event on the initial
            // population of the list.
            //
            // @todo - Remove this condition in preparation for v5.


            if (previousPlaylist) {
                player.setTimeout(function () {
                    player.trigger('playlistchange');
                }, 0);
            }
        } // Always return a shallow clone of the playlist list.
        //  We also want to return originalValue if any item in the list has it.


        return list.map(function (item) {
            return item.originalValue || item;
        }).slice();
    }; // On a new source, if there is no current item, disable auto-advance.