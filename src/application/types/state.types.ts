import IComment from "@/domain/entities/comment.entity";
import ICrew from "@/domain/entities/crew.entity";
import INotification from "@/domain/entities/notification.entity";
import ITask from "@/domain/entities/task.entity";
import IUser from "@/domain/entities/user.entity";
import IProject from "@/domain/entities/project.entity";

export interface UserState {
    loading: boolean;
    error: string | null;
    user: IUser | null;
}

// Interface pour l'état des commentaires
export interface CommentState {
    loading: boolean;
    error: string | null;
    comments: IComment[];
}

// Interface pour l'état des notifications
export interface NotificationState {
    loading: boolean;
    error: string | null;
    notifications: INotification[];
}

// Interface pour l'état des équipes
export interface CrewState {
    loading: boolean;
    error: string | null;
    crews: ICrew[];
}

// Interface pour l'état des projets
export interface ProjectState {
    loading: boolean;
    error: string | null;
    projects: IProject[];
}

// Interface pour l'état des tâches
export interface TaskState {
    loading: boolean;
    error: string | null;
    tasks: ITask[];
}
