#!/bin/bash
# BASEDIR=$(dirname "$0") NOT NEEDED

# The output directory was created by the workflow file
OUTDIR=$OBS_OUTPUT_DIR

# PATH="$PATH:$BASEDIR/../bin"  NOT NEEDED

# rm -rf $OUTDIR || true
# mkdir -p $OUTDIR
mkdir -p $OUTDIR/frames

observable-prerender-animate \
	d/3e57ec399b66f83d mapSVG \
	--iter-waitfor update \
	--iter currentTime:times \
	--out-dir $OUTDIR/frames \
	--format png

 ffmpeg -y -framerate 30 \
    -i $OUTDIR/frames/%03d_mapSVG.png \
    -c:v libx264  -pix_fmt yuv420p \
    $OUTDIR/air-quality.mp4