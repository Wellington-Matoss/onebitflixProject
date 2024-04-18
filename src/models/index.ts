// Definindo associações de tabelas

import { Category } from './Category'
import { Course } from './Course'
import { Episode } from './Episode'
import { User } from './User'

// HasMany: Tem muitos
// BelongsTo: Pertence a algo

Category.hasMany(Course, { as: 'courses' })

Course.belongsTo(Category)
Course.hasMany(Episode, { as: 'episodes' })

Episode.belongsTo(Course)

export {
    Category,
    Course,
    Episode,
    User
}