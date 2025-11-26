import { z, defineCollection } from "astro:content";
import { file } from "astro/loaders";

const plates = defineCollection({
	loader: file("src/data/plates.json"),
	schema: z.object({
		slug: z.string(),
		prettyName: z.string(),
		description: z.string(),
		plates: z.array(
			z.object({
				name: z.string(),
				description: z.string(),
				price: z.number(),
			})
		),
	}),
});

const reviews = defineCollection({
	loader: file("src/data/reviews.json"),
	schema: z.object({
		author: z.string(),
		review: z.string(),
	}),
});

const gallery = defineCollection({
	loader: file("src/data/gallery.json"),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			alt: z.string(),
			image: image(),
		}),
});

const itsupport = defineCollection({
	loader: file("src/data/itsupport.json"),
	schema: ({ image }) =>
		z.object({
		id: z.number(),
		title: z.string(),
		image: image(),
		alt: z.string(),
		url: z.string(),
		description: z.string(),
	}),
});

const storytelling = defineCollection({
	loader: file("src/data/historyteller.json"),
	schema: ({ image }) =>
		z.object({
		id: z.number(),
		title: z.string(),
		image: image(),
		alt: z.string(),
		url: z.string(),
		description: z.string(),
	}),
});

const photography = defineCollection({
	loader: file("src/data/photograph.json"),
	schema: ({ image }) =>
		z.object({
		id: z.number(),
		title: z.string(),
		image: image(),
		alt: z.string(),
		url: z.string(),
		description: z.string(),
	}),
});

const story = defineCollection({
	loader: file("src/data/story.json"),
	schema: ({ image }) =>
		z.object({
		id: z.number(),
		title: z.string(),
		slug: z.string(),
		body: z.string(),
	}),
})

export const collections = { plates, reviews, gallery, itsupport, storytelling, photography, story };