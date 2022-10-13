const { Pool } = require('pg');

class PlaylistsService {
  constructor() {
    this._pool = new Pool();
  }

  async getPlaylistWithSongsById(id) {
    const playlistQuery = {
      text: 'SELECT id, name FROM playlists WHERE id = $1',
      values: [id],
    };

    const songsQuery = {
      text: `SELECT songs.id, songs.title, songs.performer 
      FROM songs LEFT JOIN playlist_songs
      ON playlist_songs.song_id = songs.id
      WHERE playlist_songs.playlist_id = $1`,
      values: [id],
    };

    const { rows: playlists } = await this._pool.query(playlistQuery);
    const { rows: songs } = await this._pool.query(songsQuery);

    const result = playlists[0];
    result.songs = songs;
    const attachment = {
      playlist: result,
    };

    return attachment;
  }
}

module.exports = PlaylistsService;
