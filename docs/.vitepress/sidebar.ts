import { scanDir } from './util.ts'

export default {
	'/projects/': scanDir('projects'),
	'/guides/': scanDir('guides'),
	'/notes/': scanDir('notes'),
	'/blog/': scanDir('blog'),
}