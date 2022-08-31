export function slugifySeriesName(seriesName: string): string {
  let slugified = '';

  if (seriesName === 'Canvas API로 만들어보는 단진자 운동') {
    slugified = 'canvas-api-simple-pendulum';
  }

  return slugified;
}
