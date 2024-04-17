// Definindo associações de tabelas

import { Category } from './Category'
import { Course } from './Course'
import { Episode } from './Episode'
import { User } from './User'

// HasMany: Tem muitos
// BelongsTo: Pertence a algo

Category.hasMany(Course)

Course.belongsTo(Category)
Course.hasMany(Episode)

Episode.belongsTo(Course)

export {
    Category,
    Course,
    Episode,
    User
}