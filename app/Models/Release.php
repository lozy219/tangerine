<?php 

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
class Release extends Model {
	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'releases';

	/**
	 * Indicates if the model should be timestamped.
	 *
	 * @var bool
	 */
	public $timestamps = true;

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = [
		'link',
		'version',
		'release_note',
		'image_links',
		'phase',
		'platform',
		'uploader_id',
		'project_id'
	];
}