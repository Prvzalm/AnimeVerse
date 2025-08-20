import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    // Seed users
    const user1 = await prisma.user.create({
        data: {
            email: 'user1@example.com',
            password: await hash('password123', 10),
            username: 'animeFan1',
            bio: 'Anime lover and collector.',
            avatar: 'https://example.com/avatar1.png',
        },
    });

    const user2 = await prisma.user.create({
        data: {
            email: 'user2@example.com',
            password: await hash('password123', 10),
            username: 'animeFan2',
            bio: 'I love watching anime and discussing it!',
            avatar: 'https://example.com/avatar2.png',
        },
    });

    // Seed anime data
    const anime1 = await prisma.anime.create({
        data: {
            title: 'Attack on Titan',
            description: 'A story about humanity fighting against giant humanoid creatures.',
            genre: 'Action, Drama, Fantasy',
            imageUrl: 'https://example.com/attack_on_titan.jpg',
            rating: 9.5,
        },
    });

    const anime2 = await prisma.anime.create({
        data: {
            title: 'My Hero Academia',
            description: 'A story about a world where people have superpowers and a boy who wants to be a hero.',
            genre: 'Action, Adventure, Comedy',
            imageUrl: 'https://example.com/my_hero_academia.jpg',
            rating: 8.8,
        },
    });

    // Seed posts
    await prisma.post.create({
        data: {
            title: 'Best Anime of 2023',
            content: 'What do you think are the best anime of this year?',
            authorId: user1.id,
        },
    });

    await prisma.post.create({
        data: {
            title: 'Upcoming Anime Releases',
            content: 'Which upcoming anime are you most excited about?',
            authorId: user2.id,
        },
    });

    console.log('Seeding completed.');
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });